import { useState, useEffect } from "react";
import Link from "next/link";
import EnterpriseLink from "../enterpriseLink";
import { Card, Table, ProgressBar } from "react-bootstrap";
import { Models } from "../../utils/apiData";
import Moment from "react-moment";
import { GrouparooChart, ChartLinData } from "../visualizations/grouparooChart";
import { StatusHandler } from "../../utils/statusHandler";
import Loading from "../loader";

const maxSampleLength = 20;

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
    statusHandler.subscribe(subscriptionName, ({ metrics }) => {
      const _total =
        metrics.find((m) => m.collection === "totals" && m.topic === model)
          ?.count ?? -1;
      setTotal(_total);
    });

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
    statusHandler.subscribe(`groups-by-newest-member`, ({ metrics }) => {
      const _groups: GroupType[] = metrics
        .filter((s) => s.topic === "Group" && s.collection === "byNewestMember")
        .map((s) => {
          return {
            id: s.key,
            name: s.value,
            profilesCount: s.count,
            newestMembersAdded: s.metadata,
          };
        });

      setGroups(_groups);
    });

    return () => {
      statusHandler.unsubscribe(`groups-by-newest-member`);
    };
  }, []);

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
                    {parseInt(group.newestMembersAdded) !== NaN ? (
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
    statusHandler.subscribe(`running-runs-chart`, ({ metrics }) => {
      const _runs: Models.RunType[] = metrics
        .filter((s) => s.topic === "Run" && s.collection === "percentComplete")
        .map((s) => {
          return {
            id: s.key,
            creatorName: s.value,
            percentComplete: s.count,
            highWaterMark: s.metadata,
          };
        });

      setRuns(_runs);
    });

    return () => {
      statusHandler.unsubscribe(`running-runs-chart`);
    };
  }, []);

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
    statusHandler.subscribe(`schedule-next-runs-chart`, ({ metrics }) => {
      const _sources: SourceScheduleType[] = metrics
        .filter((s) => s.topic === "Source" && s.collection === "nextRun")
        .map((s) => {
          return {
            id: s.key,
            name: s.value,
            recurring: s.count === 1,
            nextRunAt: parseInt(s.metadata),
          };
        });

      setSources(_sources);
    });

    return () => {
      statusHandler.unsubscribe(`schedule-next-runs-chart`);
    };
  }, []);

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
    statusHandler.subscribe(`pending-imports-chart`, () => {
      load();
    });

    return () => {
      statusHandler.unsubscribe(`pending-imports-chart`);
    };
  }, []);

  function load() {
    const _chartData: ChartLinData = [];
    const _pendingImportKeys: string[] = [];
    const samples = statusHandler.samples;
    let _sources: ImportsBySource[] = [];
    let _pendingProfilesCount = -1;

    samples.forEach(({ metrics, timestamp }) => {
      _sources = metrics
        .filter(
          (s) => s.topic === "Import" && s.collection === "pendingBySource"
        )
        .map((s) => {
          if (!_pendingImportKeys.includes(s.value)) {
            _pendingImportKeys.push(s.value);
          }

          const idx = _pendingImportKeys.indexOf(s.value);

          if (!_chartData[idx]) _chartData[idx] = [];
          _chartData[idx].push({
            x: timestamp,
            y: s.count,
          });
          if (_chartData[idx].length > maxSampleLength) {
            _chartData[idx].shift();
          }

          _pendingProfilesCount = metrics.find(
            (s) => s.topic === "Profile" && s.collection === "pending"
          ).count;

          return {
            id: s.key,
            name: s.value,
            pending: s.count,
          };
        });
    });

    setSources(_sources);
    setPendingImportKeys(_pendingImportKeys);
    setPendingProfilesCount(_pendingProfilesCount);
    setChartData(_chartData);
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
            minPoints={maxSampleLength}
          />
        </div>
      </Card.Body>
    </Card>
  );
}

// const pendingExportSamples: ChartLinData = [];
// const pendingExportKeys: string[] = [];
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
    statusHandler.subscribe(`pending-exports-chart`, () => {
      load();
    });

    function load() {
      const _chartData: ChartLinData = [];
      const _pendingExportKeys: string[] = [];
      const samples = statusHandler.samples;
      let _destinations: ExportsByDestination[] = [];
      let _pendingExportsCount = -1;

      samples.forEach(({ metrics, timestamp }) => {
        _destinations = metrics
          .filter(
            (s) =>
              s.topic === "Export" && s.collection === "pendingByDestination"
          )
          .map((s) => {
            if (!_pendingExportKeys.includes(s.value)) {
              _pendingExportKeys.push(s.value);
            }

            const idx = _pendingExportKeys.indexOf(s.value);

            if (!_chartData[idx]) _chartData[idx] = [];
            _chartData[idx].push({
              x: timestamp,
              y: s.count,
            });
            if (_chartData[idx].length > maxSampleLength) {
              _chartData[idx].shift();
            }

            _pendingExportsCount = metrics.find(
              (s) => s.topic === "Export" && s.collection === "pending"
            ).count;

            return {
              id: s.key,
              name: s.value,
              pending: s.count,
            };
          });
      });

      setDestinations(_destinations);
      setPendingExportKeys(_pendingExportKeys);
      setPendingExportsCount(_pendingExportsCount);
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
            minPoints={maxSampleLength}
          />
        </div>
      </Card.Body>
    </Card>
  );
}
