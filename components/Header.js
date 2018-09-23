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
    <style jsx global>{`
      body {
        background-color: red;
      }
      a {
        color: #3498db;
        text-decoration: none;
      }
    `}</style>
  </header>
);
