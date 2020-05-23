import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import Link from "next/link";
import LoadingTable from "../loadingTable";
import Moment from "react-moment";

import { ApiKeyAPIData } from "../../utils/apiData";

export default function ({ errorHandler }) {
  const { execApi } = useApi(errorHandler);
  const [apiKeys, setApiKeys] = useState<ApiKeyAPIData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/apiKeys`);
    if (response?.apiKeys) {
      setApiKeys(response.apiKeys);
    }
    setLoading(false);
  }

  return (
    <>
      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Key</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {apiKeys.map((apiKey) => {
            return (
              <tr key={`apiKey-${apiKey.guid}`}>
                <td>
                  <Link href="/apiKey/[guid]" as={`/apiKey/${apiKey.guid}`}>
                    <a>
                      <strong>{apiKey.name}</strong>
                    </a>
                  </Link>
                </td>
                <td>
                  <code>{apiKey.apiKey}</code>
                </td>
                <td>
                  <Moment fromNow>{apiKey.createdAt}</Moment>
                </td>
              </tr>
            );
          })}
        </tbody>
      </LoadingTable>
    </>
  );
}
