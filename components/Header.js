import Link from "next/link";

export default () => (
  <header>
    <Link href="/">
      <a>Home</a>
    </Link>{" "}
    |{" "}
    <Link href="/about">
      <a>About</a>
    </Link>
  </header>
);
