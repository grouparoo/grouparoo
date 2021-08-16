import { useState, useEffect } from "react";
import Link from "next/link";
import EnterpriseLink from "../enterpriseLink";
import { Card, Table, ProgressBar } from "react-bootstrap";
import { Misc, Models } from "../../utils/apiData";
import Moment from "react-moment";
import { GrouparooChart, ChartLinData } from "../visualizations/grouparooChart";
import { StatusHandler } from "../../utils/statusHandler";
import Loading from "../loader";

const maxSampleLength = 30;

export function BigTotalNumber({
  statusHandler,
  model,
  title,
  href = null,
}: {
  statusHandler: StatusHandler;
  model: string;
  title: string;
  href?: string;
}) {
  const [total, setTotal] = useState<number>(-1);
  const subscriptionName = `big-total-number-${title}`;

  useEffect(() => {
    statusHandler.subscribe(
      subscriptionName,
      ({ metric }: { metric: Misc.StatusMetricType }) => {
        setTotal(metric.count);
      },
      { topic: model, collection: "totals" }
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

        <span style={{ fontSize: 25 }}>{total >= 0 ? total : <Loading />}</span>
      </Card.Body>
    </Card>
  );
}

export function GroupsByNewestMember({
  statusHandler,
}: {
  statusHandler: StatusHandler;
}) {
  type GroupType = {
    id: string;
    name: string;
    profilesCount: number;
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
          profilesCount: metric.count,
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
              <th>Profiles</th>
              <th>Newest Member Added</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => {
              return (
                <tr key={`group-${group.id}`}>
                  <td>
                    <EnterpriseLink
                      href="/group/[id]/rules"
                      as={`/group/${group.id}/rules`}
                    >
                      <a>{group.name}</a>
                    </EnterpriseLink>
                  </td>
                  <td>{group.profilesCount}</td>
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
        <br />
        <Link href="/groups">
          <a>See all Groups</a>
        </Link>
      </Card.Body>
    </Card>
  );
}

export function RunningRuns({
  statusHandler,
}: {
  statusHandler: StatusHandler;
}) {
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
                    <Link href="/run/[id]/edit" as={`/run/${run.id}/edit`}>
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

export function ScheduleRuns({
  statusHandler,
}: {
  statusHandler: StatusHandler;
}) {
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
                    <EnterpriseLink
                      href="/source/[id]/schedule"
                      as={`/source/${sourceSchedule.id}/schedule`}
                    >
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

export function PendingImports({
  statusHandler,
}: {
  statusHandler: StatusHandler;
}) {
  type ImportsBySource = {
    id: string;
    name: string;
    pending: number;
  };

  const [sources, setSources] = useState<ImportsBySource[]>([]);
  const [pendingProfilesCount, setPendingProfilesCount] = useState(-1);
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
    const pendingProfileCollection = statusHandler.metrics["Profile"];
    if (!pendingProfileCollection) return;
    if (!pendingProfileCollection["pending"]) return;

    const pendingProfileMetric =
      pendingProfileCollection["pending"][
        pendingProfileCollection["pending"].length - 1
      ].metric;
    setPendingProfilesCount(pendingProfileMetric.count);

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
      const idx = _pendingImportKeys.indexOf(metric.value);

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
    if (_pendingImportKeys) setPendingImportKeys(_pendingImportKeys);
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
        <Card.Title>Pending Profiles ({pendingProfilesCount})</Card.Title>
        <div style={{ height: 300 }}>
          <GrouparooChart
            data={chartData}
            keys={pendingImportKeys}
            interpolation="linear"
            minPoints={3}
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export function PendingExports({
  statusHandler,
}: {
  statusHandler: StatusHandler;
}) {
  type ExportsByDestination = {
    id: string;
    name: string;
    pending: number;
  };

  const [destinations, setDestinations] = useState<ExportsByDestination[]>([]);
  const [pendingExportsCount, setPendingExportsCount] = useState(0);
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

        const idx = _pendingExportKeys.indexOf(metric.value);
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
      setPendingExportKeys(_pendingExportKeys);
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
        <Card.Title>Pending Exports ({pendingExportsCount})</Card.Title>
        <div style={{ height: 300 }}>
          <GrouparooChart
            data={chartData}
            keys={pendingExportKeys}
            interpolation="linear"
            minPoints={3}
          />
        </div>
      </Card.Body>
    </Card>
  );
}
