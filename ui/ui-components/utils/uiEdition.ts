export type GrouparooUIEdition = "enterprise" | "community" | "config";
export const grouparooUiEdition = () =>
  process.env.GROUPAROO_UI_EDITION as GrouparooUIEdition;
