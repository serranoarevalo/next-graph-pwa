import App, { Container } from "next/app";
import React from "react";
import withApollo from "../lib/withApollo";
import { Layout } from "antd";
import Header from "../components/Header";
const { Footer, Content } = Layout;

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
          <Footer>This is important</Footer>
        </Layout>
      </Container>
    );
  }
}

export default withApollo(MyApp);
