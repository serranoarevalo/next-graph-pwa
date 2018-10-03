import App, { Container } from "next/app";
import React from "react";
import withApollo from "../lib/withApollo";
import { Layout } from "antd";
import Header from "../components/Header";
import { ApolloProvider } from "react-apollo";
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
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Container>
          <Layout>
            <Component {...pageProps} />
            <Footer>&copy; Nomad Store</Footer>
          </Layout>
        </Container>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
