import Tabs from "../tabs";
import { FileAPIData } from "../../utils/apiData";

export default function ({ file }: { file: FileAPIData }) {
  const tabs = ["edit"];
  const fileNameParts = file.path.split("/");
  const fileName = fileNameParts[fileNameParts.length - 1];
  return <Tabs name={fileName} tabs={tabs} />;
}
