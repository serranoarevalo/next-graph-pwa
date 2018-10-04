import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Input } from "antd";
import ProductCard from "../../components/ProductCard";

export default ({ data, searchingBy, updateSearch }) => (
  <>
    <Head>
      <title>Search | Nomad Store</title>
    </Head>
    <Header
      centerColumn={
        <h4>
          {searchingBy === null || searchingBy === ""
            ? "Search"
            : `Searching by: ${searchingBy}`}
        </h4>
      }
      rightColumn={<Button href="/cart" text="Cart" />}
      leftColumn={<Button href="/" text="Home" />}
    />
    <div style={{ padding: "0px 50px" }}>
      <Input
        value={searchingBy}
        onChange={updateSearch}
        placeholder={"Search by name..."}
      />
      <div
        style={{
          marginBottom: "50px",
          display: "grid",
          gridGap: "10px",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          width: "100%",
          marginTop: "50px"
        }}
      >
        {data &&
          data.products &&
          data.products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              subtitle={product.detail}
              price={product.price}
              photoUrl={product.photo.url}
              price={product.price}
            />
          ))}
      </div>
    </div>
  </>
);
