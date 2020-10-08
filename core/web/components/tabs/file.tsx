import Tabs from "../tabs";
import { Models } from "../../utils/apiData";

export default function FileTabs({ file }: { file: Models.FileType }) {
  const tabs = ["edit"];
  const fileNameParts = file.path.split("/");
  const fileName = fileNameParts[fileNameParts.length - 1];
  return <Tabs name={fileName} tabs={tabs} />;
}
