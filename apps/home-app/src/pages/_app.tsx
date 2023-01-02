import { Layout } from '@nextjs-monorepo/ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to home-app!</title>
      </Head>
      <Layout appTitle="Home-app">
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default CustomApp;
