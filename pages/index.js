import Head from "next/head";
import Header from "../components/Header";
import Button from "../components/Button";
import { Layout } from "antd";
const { Content } = Layout;

const Index = props => (
  <>
    <Head>
      <title>Home | Nomad Store</title>
    </Head>
    <Header
      centerColumn={<h4>Nomad Store</h4>}
      rightColumn={
        <Button href="/cart" text="Cart" btnIcon={"shopping-cart"} />
      }
      leftColumn={<Button href="/search" text="Search" btnIcon={"search"} />}
    />
    <Content style={{ padding: "0 50px" }}>
      <div
        style={{
          display: "grid",
          gridGap: "50px",
          gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))",
          width: "100%"
        }}
      >
        <Button
          href={"/category?name=man"}
          hrefAs={"/category/man"}
          text={"Man"}
        />
        <Button
          href={"/category?name=woman"}
          hrefAs={"/category/woman"}
          text={"Woman"}
        />
        <Button
          href={"/category?name=shoes"}
          hrefAs={"/category/shoes"}
          text={"Shoes"}
        />
        <Button
          href={"/category?name=shirts"}
          hrefAs={"/category/shirts"}
          text={"Shirts"}
        />
      </div>
    </Content>
  </>
);

export default Index;
