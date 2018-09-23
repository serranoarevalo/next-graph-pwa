import Link from "next/link";
import withLayout from "../lib/withLayout";
import PostLink from "../components/PostLink";

const Index = () => (
  <div>
    <h1>Index</h1>
    <ul>
      <li>
        <PostLink title={"Hi!"} />
      </li>
      <li>
        <PostLink title={"How are you"} />
      </li>
    </ul>
  </div>
);

export default withLayout(Index);
