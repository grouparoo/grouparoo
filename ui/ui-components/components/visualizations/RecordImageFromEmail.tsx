import { Image } from "react-bootstrap";
import md5 from "md5";
import { useMemo } from "react";

export default function RecordImageFromEmail({
  loading = false,
  email,
  width = 400,
  className,
}: {
  loading?: boolean;
  email: string;
  width?: number;
  className?: string;
}) {
  if (loading) {
    return null;
  }

  if (!email) {
    email = ""; // so we can still get an MD5 hash for a "record missing" image
  }

  const src = useMemo(() => {
    const hash = md5(email.toString().trim());
    return `https://www.gravatar.com/avatar/${hash}?s=${width}.png`;
  }, [email, width]);

  return (
    <Image
      src={src}
      rounded
      style={{ maxWidth: width, width: "100%" }}
      className={className}
    />
  );
}
