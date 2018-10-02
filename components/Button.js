import Link from "next/link";
import { Button } from "antd";

export default ({ href, text }) => (
  <Button>
    <Link href={`href`}>
      <a>{text}</a>
    </Link>
  </Button>
);
