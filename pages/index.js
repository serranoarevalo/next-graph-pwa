import Link from "next/link";

export default () => (
  <div>
    <h1>Index</h1>
    <Link href={"/about"}>Go to about</Link>
  </div>
);
