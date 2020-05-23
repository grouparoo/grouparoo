import TabbedContainer from "../../components/layouts/tabbedContainer";
import { Fragment, useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import ImportEdit from "../../components/forms/import/edit";
import { useApi } from "../../hooks/useApi";

import { ImportAPIData } from "../../utils/apiData";

export default function (props) {
  const [_import, setImport] = useState<ImportAPIData>({});
  const { execApi } = useApi(props.errorHandler);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const response = await execApi("get", `/import/${props.query.guid}`);
    if (response?.import) {
      setImport(response.import);
    }
  }

  return (
    <TabbedContainer
      name={_import.guid}
      errorHandler={props.errorHandler}
      type="import"
      defaultTab="edit"
      query={props.query}
    >
      <Fragment key="edit">
        <Card border="success">
          <Card.Body>
            <ImportEdit {...props} />
          </Card.Body>
        </Card>
      </Fragment>
    </TabbedContainer>
  );
}
