/* eslint-disable react/react-in-jsx-scope */
export default {
  projectLink: 'https://github.com/manan30/elegantui',
  github: 'https://github.com/manan30/elegantui',
  docsRepositoryBase:
    'https://github.com/manan30/elegantui/tree/main/docs/pages',
  titleSuffix: ' – ElegantUI',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Manan Joshi.`,
  footerEditLink: ``,
  logo: <span>ElegantUI - React component library</span>,
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content='ElegantUI: React component library' />
      <meta name='og:title' content='ElegantUI: React component library' />
    </>
  )
};
