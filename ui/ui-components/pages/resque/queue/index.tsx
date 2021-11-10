import { useState, useEffect } from "react";
import { UseApi } from "../../../hooks/useApi";
import { Table } from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";
import ResqueTabs from "../../../components/tabs/Resque";
import { ErrorHandler } from "../../../utils/errorHandler";

export default function ResqueQueue(props) {
  const { errorHandler }: { errorHandler: ErrorHandler } = props;
  const { execApi } = UseApi(props, errorHandler);
  const [queues, setQueues] = useState({});

  useEffect(() => {
    load();
  }, []);

  async function load() {
    let response = await execApi("get", `/resque/resqueDetails`);
    if (response?.resqueDetails?.queues) {
      setQueues(response.resqueDetails.queues);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Resque Queue</title>
      </Head>

      <ResqueTabs />
      <h1>Queues</h1>

      <p>Choose a Queue:</p>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Queue</th>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(queues).map((queue) => {
            return (
              <tr key={queue}>
                <td>
                  <Link href={`/resque/queue/${queue}`}>{queue}</Link>
                </td>
                <td>{queues[queue].length} jobs</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
