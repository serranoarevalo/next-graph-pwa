import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";

export default ({ data }) => (
  <>
    <Head>
      <title>
        {(data && data.category && data.category.name) || ""} | Nomad Store
      </title>
    </Head>
    <Header
      centerColumn={<h4>{data && data.category && data.category.name}</h4>}
      rightColumn={<Button href="/cart" text="Cart" />}
      leftColumn={<Button href="/" text="Home" />}
    />
  </>
);
