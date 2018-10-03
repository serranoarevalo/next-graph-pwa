import App, { Container } from "next/app";
import React from "react";
import withApollo from "../lib/withApollo";
import { Layout } from "antd";
import { ApolloProvider } from "react-apollo";
const { Footer } = Layout;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Layout>
            <Component {...pageProps} />
            <Footer>&copy; Nomad Store</Footer>
          </Layout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
