import LinkButton from "../LinkButton";
import { Models } from "../../utils/apiData";

export default function PropertyAddMultipleButton({
  source,
}: {
  source: Models.SourceType;
}) {
  if (source.state === "draft") return null;
  if (!source.previewAvailable) return null;

  return (
    <>
      &nbsp;
      <LinkButton
        href={`/model/${source.modelId}/source/${source.id}/multipleProperties`}
        size="sm"
        variant="outline-primary"
        hideOn={["community"]}
      >
        Add Multiple Properties
      </LinkButton>
    </>
  );
}
