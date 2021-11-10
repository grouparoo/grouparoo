import Link from "next/link";

export default function LogsTabs({ active }) {
  return (
    <>
      <nav className="nav nav-tabs" role="tablist">
        <Link href="/logs/list">
          <a
            className={
              active === "list"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
          >
            List
          </a>
        </Link>
        <Link href="/logs/stream">
          <a
            className={
              active === "stream"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
          >
            Stream
          </a>
        </Link>
      </nav>
      <br />
    </>
  );
}
