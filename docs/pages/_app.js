/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import NextScript from 'next/script';

import '@elegantui/atoms/dist/styles.css';
import '@elegantui/forms/dist/styles.css';
import 'nextra-theme-docs/style.css';
import '../styles/global.css';

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      {process.env.NODE_ENV === 'production' ? (
        <NextScript
          data-website-id='44ef75be-3be4-4e59-9107-dff0ebe6c234'
          src='https://wave-studios-tracking.up.railway.app/umami.js'
          strategy='lazyOnload'
        />
      ) : null}
      <Component {...pageProps} />
    </>
  );
}
