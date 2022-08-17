/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import '@elegantui/atoms/dist/styles.css';
import 'nextra-theme-docs/style.css';
import '../styles/global.css';

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
