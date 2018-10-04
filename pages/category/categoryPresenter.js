import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";
import ProductCard from "../../components/ProductCard";

export default ({ data }) => (
  <>
    <Head>
      <title>{data.category.name} | Nomad Store</title>
    </Head>
    <Header
      centerColumn={<h4>{data.category.name}</h4>}
      rightColumn={<Button href="/cart" text="Cart" />}
      leftColumn={<Button href="/" text="Home" />}
    />
    <div
      style={{
        marginBottom: "50px",
        display: "grid",
        gridGap: "10px",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        width: "100%",
        padding: "0 50px"
      }}
    >
      {data.category.products &&
        data.category.products.map(product => (
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
  </>
);
