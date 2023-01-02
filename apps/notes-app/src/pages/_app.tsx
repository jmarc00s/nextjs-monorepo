import { AppProps } from 'next/app';
import Head from 'next/head';

import { Layout } from '@nextjs-monorepo/ui';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to notes-app!</title>
      </Head>
      <Layout appTitle="Notes-app">
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default CustomApp;
