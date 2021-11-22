import { Models } from "../../utils/apiData";
import EnterpriseLink from "../GrouparooLink";

const DestinationCollectionLink: React.FC<{
  destination: Models.DestinationType;
}> = ({ destination }) => {
  switch (destination.collection) {
    case "group": {
      return (
        <EnterpriseLink
          href={`/model/${destination.group.modelId}/group/${destination.group.id}/edit`}
        >
          <a>{destination.group.name}</a>
        </EnterpriseLink>
      );
    }
    case "model": {
      return (
        <EnterpriseLink href={`/model/${destination.modelId}/edit`}>
          <a>{destination.modelName}</a>
        </EnterpriseLink>
      );
    }
    default: {
      return <>None</>;
    }
  }
};

export default DestinationCollectionLink;
