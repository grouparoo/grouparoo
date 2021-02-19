export interface dbtProfileMethod {
  (argument: {
    projectDirRelativePath?: string;
    profileDirRelativePath?: string;
    projectDirFullPath?: string;
    profileDirFullPath?: string;
  }): {
    type: string;
    options: { [key: string]: any };
  };
}

export const dbtProfile: dbtProfileMethod = ({
  projectDirRelativePath,
  profileDirRelativePath,
  projectDirFullPath,
  profileDirFullPath,
}) => {
  const type: string = "postgres";
  const options: { [key: string]: any } = {};

  return { type, options };
};
