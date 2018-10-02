import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Button from "../components/Button";

const Index = props => (
  <>
    <Head>
      <title>Home | Nomad Store</title>
    </Head>
    <Header
      centerColumn={<h4>Nomad Store</h4>}
      rightColumn={<Button href="/cart" text="Carts" />}
      leftColumn={<Button href="/search" text="Search" />}
    />
  </>
);

export default Index;
