import TabbedContainer from "../../components/layouts/tabbedContainer";
import { Fragment, useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import ExportEdit from "../../components/forms/export/edit";
import { useApi } from "../../hooks/useApi";

import { ExportAPIData } from "../../utils/apiData";

export default function (props) {
  const [_import, setImport] = useState<ExportAPIData>({});
  const { execApi } = useApi(props.errorHandler);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const response = await execApi(
      "get",
      `/api/${props.apiVersion}/export/${props.query.guid}`
    );
    if (response?.export) {
      setImport(response.export);
    }
  }

  return (
    <TabbedContainer
      name={_import.guid}
      errorHandler={props.errorHandler}
      apiVersion={props.apiVersion}
      type="export"
      defaultTab="edit"
      query={props.query}
    >
      <Fragment key="edit">
        <Card border="success">
          <Card.Body>
            <ExportEdit {...props} />
          </Card.Body>
        </Card>
      </Fragment>
    </TabbedContainer>
  );
}
