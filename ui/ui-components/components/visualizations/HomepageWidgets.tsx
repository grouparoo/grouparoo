import { useState, useEffect } from "react";
import Link from "next/link";
import Moment from "react-moment";
import { Card, Table, ProgressBar } from "react-bootstrap";
import { statusHandler } from "../../eventHandlers";
import { Misc, Models } from "../../utils/apiData";
import EnterpriseLink from "../GrouparooLink";
import Loading from "../Loader";
import { GrouparooChart, ChartLinData } from "./GrouparooChart";

const maxSampleLength = 30;

export function BigTotalNumber({
  topic,
  title,
  collection = "totals",
  href = null,
}: {
  title: string;
  topic: string;
  collection?: string;
  href?: string;
}) {
  const [total, setTotal] = useState<number>();
  const subscriptionName = `big-total-number-${title}`;

  useEffect(() => {
    statusHandler.subscribe(
      subscriptionName,
      ({ metric }: { metric: Misc.StatusMetricType }) => {
        setTotal(metric.count);
      },
      { topic, collection }
    );

    return () => {
      statusHandler.unsubscribe(subscriptionName);
    };
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {href ? (
            <Link href={href}>
              <a>{title}</a>
            </Link>
          ) : (
            title
          )}
        </Card.Title>

        <h3 style={{ fontWeight: "normal" }}>{total ?? <Loading />}</h3>
        <br />
      </Card.Body>
    </Card>
  );
}

export function RecordsExported() {
  const [days1, setDays1] = useState<number>(null);
  const [days7, setDays7] = useState<number>(null);
  const [days30, setDays30] = useState<number>(null);

  [1, 7, 30].forEach((n, idx) => {
    useEffect(() => {
      const subscriptionName = `records-exported-day-${n}`;

      statusHandler.subscribe(
        subscriptionName,
        ({ metric }: { metric: Misc.StatusMetricType }) => {
          if (idx === 0) return setDays1(metric.count);
          if (idx === 1) return setDays7(metric.count);
          if (idx === 2) return setDays30(metric.count);
        },
        { topic: "Export", collection: `${n}DayDistinct` }
      );

      return () => {
        statusHandler.unsubscribe(subscriptionName);
      };
    }, []);
  });

  return (
    <Card>
      <Card.Body>
        <Card.Title>Records Exported</Card.Title>
        Today:{" "}
        {days1 !== null ? <strong>{days1}</strong> : <Loading size="sm" />}
        <br />
        Last 7 Days:{" "}
        {days7 !== null ? <strong>{days7}</strong> : <Loading size="sm" />}
        <br />
        Last 30 Days:{" "}
        {days30 !== null ? <strong>{days30}</strong> : <Loading size="sm" />}
      </Card.Body>
    </Card>
  );
}

export function GroupsByNewestMember() {
  type GroupType = {
    id: string;
    name: string;
    recordsCount: number;
    newestMembersAdded: string;
  };

  const [groups, setGroups] = useState<GroupType[]>([]);

  useEffect(() => {
    statusHandler.subscribe(`groups-by-newest-member`, () => load(), {
      topic: "Group",
      collection: "byNewestMember",
    });

    return () => {
      statusHandler.unsubscribe(`groups-by-newest-member`);
    };
  }, []);

  function load() {
    const collection = statusHandler.metrics["Group"]["byNewestMember"];
    const latestTimestamp = collection[collection.length - 1].timestamp;
    const metrics = collection.filter((m) => m.timestamp === latestTimestamp);
    setGroups(
      metrics.map(({ metric }) => {
        return {
          id: metric.key,
          name: metric.value,
          recordsCount: metric.count,
          newestMembersAdded: metric.metadata,
        };
      })
    );
  }

  if (groups.length === 0) {
    return (
      <Card>
        <Card.Body>No Groups</Card.Body>
      </Card>
    );
  }

  return (
    <Card>
      <Card.Body>
        <Table size={"sm"}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Records</th>
              <th>Newest Member Added</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => {
              return (
                <tr key={`group-${group.id}`}>
                  <td>
                    <EnterpriseLink href={`/object/${group.id}`}>
                      <a>{group.name}</a>
                    </EnterpriseLink>
                  </td>
                  <td>{group.recordsCount}</td>
                  <td>
                    {!isNaN(parseInt(group.newestMembersAdded)) ? (
                      <Moment fromNow>
                        {parseInt(group.newestMembersAdded)}
                      </Moment>
                    ) : (
                      group.newestMembersAdded
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export function RunningRuns() {
  const [runs, setRuns] = useState<Models.RunType[]>([]);

  useEffect(() => {
    statusHandler.subscribe(`running-runs-chart`, () => load(), {
      topic: "Run",
      collection: "pending",
    });

    return () => {
      statusHandler.unsubscribe(`running-runs-chart`);
    };
  }, []);

  function load() {
    const pendingCollection = statusHandler.metrics["Run"]["pending"];
    if (!pendingCollection) return;
    const activeRunIds: string[] =
      JSON.parse(
        pendingCollection[pendingCollection.length - 1]?.metric?.value
      ) ?? [];

    if (pendingCollection.length === 0) return setRuns([]);

    const percentCollection = statusHandler.metrics["Run"]["percentComplete"];
    if (!percentCollection) return;
    const latestTimestamp =
      percentCollection[percentCollection.length - 1].timestamp;
    const metrics = percentCollection.filter(
      (m) => m.timestamp === latestTimestamp
    );
    setRuns(
      //@ts-ignore
      metrics
        .filter(({ metric }) => activeRunIds.includes(metric.key))
        .map(({ metric }) => {
          return {
            id: metric.key,
            creatorName: metric.value,
            percentComplete: metric.count,
            highWaterMark: metric.metadata,
          };
        })
    );
  }

  if (runs.length === 0) {
    return (
      <Card>
        <Card.Body>No Active Runs</Card.Body>
      </Card>
    );
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Active Runs</Card.Title>
        <Table size="sm">
          <thead>
            <tr>
              <th>Creator</th>
              <th>High Water Mark</th>
              <th>Percent Complete</th>
            </tr>
          </thead>
          <tbody>
            {runs.map((run) => {
              return (
                <tr key={`run-${run.id}`}>
                  <td>
                    <Link href={`/run/${run.id}/edit`}>
                      <a>{run.creatorName}</a>
                    </Link>
                  </td>
                  <td>{run.highWaterMark}</td>
                  <td>
                    <ProgressBar
                      variant="info"
                      style={{ minWidth: 300 }}
                      animated={run.percentComplete > 0 ? true : false}
                      now={run.percentComplete < 5 ? 5 : run.percentComplete} // Always display enough of the progress bar to see the label
                      label={`${run.percentComplete}%`}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export function ScheduleRuns() {
  type SourceScheduleType = {
    id: string;
    name: string;
    recurring: boolean;
    nextRunAt: number;
  };

  const [sources, setSources] = useState<SourceScheduleType[]>([]);

  useEffect(() => {
    statusHandler.subscribe(`schedule-next-runs-chart`, () => load(), {
      topic: "Source",
      collection: "nextRun",
    });

    return () => {
      statusHandler.unsubscribe(`schedule-next-runs-chart`);
    };
  }, []);

  function load() {
    const collection = statusHandler.metrics["Source"]["nextRun"];
    const latestTimestamp = collection[collection.length - 1].timestamp;
    const metrics = collection.filter((m) => m.timestamp === latestTimestamp);
    setSources(
      metrics
        .map(({ metric }) => {
          return {
            id: metric.key,
            name: metric.value,
            recurring: metric.count === 1,
            nextRunAt: parseInt(metric.metadata),
          };
        })
        .sort((a, b) => a.id.localeCompare(b.id))
    );
  }

  if (sources.length === 0) {
    return (
      <Card>
        <Card.Body>No Recurring Schedules</Card.Body>
      </Card>
    );
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Schedules</Card.Title>
        <Table size="sm">
          <thead>
            <tr>
              <th>Schedule</th>
              <th>Next Run</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((sourceSchedule) => {
              if (!sourceSchedule.recurring) return null;

              return (
                <tr key={`source-${sourceSchedule.id}`}>
                  <td>
                    <EnterpriseLink href={`/object/${sourceSchedule.id}`}>
                      <a>{sourceSchedule.name}</a>
                    </EnterpriseLink>
                  </td>
                  <td>
                    {sourceSchedule.nextRunAt > 0 ? (
                      <>
                        <Moment fromNow>{sourceSchedule.nextRunAt}</Moment>
                      </>
                    ) : (
                      "Soon"
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export function PendingImports() {
  type ImportsBySource = {
    id: string;
    name: string;
    pending: number;
  };

  const [sources, setSources] = useState<ImportsBySource[]>([]);
  const [pendingRecordsCount, setPendingRecordsCount] = useState<number>(null);
  const [chartData, setChartData] = useState<ChartLinData>([]);
  const [pendingImportKeys, setPendingImportKeys] = useState<string[]>([]);

  useEffect(() => {
    statusHandler.subscribe(`pending-imports-chart`, () => load(), {
      topic: "Import",
      collection: "pendingBySource",
    });

    return () => {
      statusHandler.unsubscribe(`pending-imports-chart`);
    };
  }, []);

  function load() {
    const pendingRecordCollection = statusHandler.metrics["GrouparooRecord"];
    if (!pendingRecordCollection) return;
    if (!pendingRecordCollection["pending"]) return;

    const pendingRecordMetric =
      pendingRecordCollection["pending"][
        pendingRecordCollection["pending"].length - 1
      ].metric;
    setPendingRecordsCount(pendingRecordMetric.count);

    const _chartData: ChartLinData = [];
    const _pendingImportKeys: string[] = [];
    const _sources: ImportsBySource[] = [];

    const pendingSourceCollection = statusHandler.metrics["Import"];
    if (!pendingSourceCollection) return;

    const pendingSourceMetrics = pendingSourceCollection["pendingBySource"];
    if (!pendingSourceMetrics) return;
    pendingSourceMetrics.forEach(({ metric, timestamp }) => {
      if (!_pendingImportKeys.includes(metric.value)) {
        _pendingImportKeys.push(metric.value);
      }
      const idx = _pendingImportKeys.sort().indexOf(metric.value);

      if (!_chartData[idx]) _chartData[idx] = [];
      _chartData[idx].push({
        x: timestamp,
        y: metric.count,
      });

      if (!_sources.find((s) => s.id === metric.key)) {
        _sources.push({
          id: metric.key,
          name: metric.value,
          pending: metric.count,
        });
      }
    });

    for (const idx in _chartData) {
      while (_chartData[idx].length > maxSampleLength) _chartData[idx].shift();
    }

    if (_sources) setSources(_sources);
    if (_pendingImportKeys) setPendingImportKeys(_pendingImportKeys.sort());
    if (_chartData) setChartData(_chartData);
  }

  if (sources.length === 0) {
    return (
      <Card>
        <Card.Body>No Sources</Card.Body>
      </Card>
    );
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          Pending Records ({pendingRecordsCount ?? <Loading size="sm" />})
        </Card.Title>
        <div style={{ height: 300 }}>
          <GrouparooChart
            data={chartData}
            keys={pendingImportKeys}
            interpolation="linear"
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export function PendingExports() {
  type ExportsByDestination = {
    id: string;
    name: string;
    pending: number;
  };

  const [destinations, setDestinations] = useState<ExportsByDestination[]>([]);
  const [pendingExportsCount, setPendingExportsCount] = useState(null);
  const [chartData, setChartData] = useState<ChartLinData>([]);
  const [pendingExportKeys, setPendingExportKeys] = useState<string[]>([]);

  useEffect(() => {
    statusHandler.subscribe(`pending-exports-chart`, () => load(), {
      topic: "Export",
      collection: "pending",
    });

    function load() {
      const pendingExportCountCollection = statusHandler.metrics["Export"];
      if (!pendingExportCountCollection) return;
      if (!pendingExportCountCollection["pending"]) return;

      const pendingExportCountMetric =
        pendingExportCountCollection["pending"][
          pendingExportCountCollection["pending"].length - 1
        ].metric;
      setPendingExportsCount(pendingExportCountMetric.count);

      const _chartData: ChartLinData = [];
      const _pendingExportKeys: string[] = [];
      let _destinations: ExportsByDestination[] = [];

      const pendingExportCollection = statusHandler.metrics["Export"];
      if (!pendingExportCollection) return;

      const pendingExportMetrics =
        pendingExportCollection["pendingByDestination"];
      if (!pendingExportMetrics) return;
      pendingExportMetrics.forEach(({ metric, timestamp }) => {
        if (!_pendingExportKeys.includes(metric.value)) {
          _pendingExportKeys.push(metric.value);
        }

        const idx = _pendingExportKeys.sort().indexOf(metric.value);
        if (!_chartData[idx]) _chartData[idx] = [];

        _chartData[idx].push({
          x: timestamp,
          y: metric.count,
        });

        if (!_destinations.find((s) => s.id === metric.key)) {
          _destinations.push({
            id: metric.key,
            name: metric.value,
            pending: metric.count,
          });
        }
      });

      for (const idx in _chartData) {
        while (_chartData[idx].length > maxSampleLength)
          _chartData[idx].shift();
      }

      setDestinations(_destinations);
      setPendingExportKeys(_pendingExportKeys.sort());
      setChartData(_chartData);
    }

    return () => {
      statusHandler.unsubscribe(`pending-exports-chart`);
    };
  }, []);

  if (destinations.length === 0) {
    return (
      <Card>
        <Card.Body>No Destinations</Card.Body>
      </Card>
    );
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          Pending Exports ({pendingExportsCount ?? <Loading size="sm" />})
        </Card.Title>
        <div style={{ height: 300 }}>
          <GrouparooChart
            data={chartData}
            keys={pendingExportKeys}
            interpolation="linear"
          />
        </div>
      </Card.Body>
    </Card>
  );
}
