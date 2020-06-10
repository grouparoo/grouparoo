// build up the "browser" environment

global.window = { document: { referrer: "" } };

// query params
global.window.location = { pathname: "/", search: "", href: "" };

// cookies
Object.defineProperty(global.window.document, "cookie", {
  writable: true,
  value: "",
});
