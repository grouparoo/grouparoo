import { Fragment } from "react";

// This component will wrap the entire application.
// It will be highest in the hierarchy of the page, before the <Layout> or <Page>
// You can modify the <head> of all pages by including next/head and adding script or css tags within a <head /> declaration
// See _app.tsx for the details of what is available to you in props - query, etc.

export default function Injection({ children }) {
  return <Fragment>{children}</Fragment>;
}
