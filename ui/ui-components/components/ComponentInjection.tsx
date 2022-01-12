import React from "react";
import {
  ContextValue,
  renderNestedContextProviders,
} from "../utils/contextHelper";

// This component will wrap the entire application.
// It will be highest in the hierarchy of the page, before the <Layout> or <Page>
// You can modify the <head> of all pages by including next/head and adding script or css tags within a <head /> declaration
// See _app.tsx for the details of what is available to you in props - query, etc.

interface Props {
  contextValues?: ContextValue[];
}

const Injection: React.FC<Props> = ({ children, contextValues }) => {
  return renderNestedContextProviders(contextValues, children);
};

export default Injection;
