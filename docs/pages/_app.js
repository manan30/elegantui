/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import 'nextra-theme-docs/style.css';
import '@elegantui/forms/dist/styles.css';

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
