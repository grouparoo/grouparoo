import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Models } from "../utils/apiData";

const apiVersion = process.env.API_VERSION || "v1";

export function FilePreview({
  file,
  maxWidth = 100,
  maxHeight = 100,
}: {
  file: Models.FileType;
  maxWidth?: number | string;
  maxHeight?: number | string;
}) {
  // we useEffect because we don't want to render this component on the server (no csrf token)
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  if (!loaded) return null;

  const csrfToken = globalThis?.localStorage?.getItem("session:csrfToken");

  if (file.type === "image") {
    return (
      <Image
        thumbnail
        style={{ maxWidth, maxHeight }}
        src={`/api/${apiVersion}/file/${file.id}?csrfToken=${csrfToken}`}
      />
    );
  }

  return (
    <p>
      <em>no preview</em>
    </p>
  );
}

export async function downloadFile(file) {
  const csrfToken = globalThis?.localStorage?.getItem("session:csrfToken");

  console.info("downloading file", file);
  const url = `/api/${apiVersion}/file/${file.id}?csrfToken=${csrfToken}`;
  window.open(url, "_new");
}
