/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// TODO: Add new tailwind classes build
import '@elegantui/forms/dist/styles.css';
import 'nextra-theme-docs/style.css';

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
