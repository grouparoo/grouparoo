import { Image } from "react-bootstrap";
import md5 from "md5";

export default function RecordImageFromEmail({
  loading = false,
  email,
  width = 400,
}: {
  loading?: boolean;
  email: string;
  width?: number;
}) {
  if (loading) {
    return null;
  }

  if (!email) {
    email = ""; // so we can still get an MD5 hash for a "record missing" image
  }

  const hash = md5(email.toString().trim());
  const src = `https://www.gravatar.com/avatar/${hash}?s=${width}.png`;

  return <Image src={src} rounded style={{ maxWidth: width, width: "100%" }} />;
}
