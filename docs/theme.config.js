/* eslint-disable react/react-in-jsx-scope */
export default {
  projectLink: 'https://github.com/manan30/elegantui',
  github: 'https://github.com/manan30/elegantui',
  titleSuffix: ' – ElegantUI',
  nextLinks: true,
  prevLinks: true,
  search: true,
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Manan Joshi`,
  footerEditLink: '',
  logo: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src='/logo.png' alt='ElegantUI logo' width={32} height={32} />
      <span style={{ marginLeft: '0.5rem' }}>ElegantUI</span>
    </div>
  ),
  head: (
    <>
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <link rel='icon' href='/logo.svg' type='image/svg+xml' />
      <link rel='manifest' href='/site.webmanifest' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#333333' />
      <meta name='apple-mobile-web-app-title' content='ElegantUI' />
      <meta name='application-name' content='ElegantUI' />
      <meta name='msapplication-TileColor' content='#333333' />
      <meta name='theme-color' content='#333333' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='Content-Language' content='en' />
      <meta name='author' content='Manan Joshi' />
      <title>ElegantUI</title>
      <meta name='title' content='ElegantUI: React component library' />
      <meta
        name='description'
        content='ElegantUI is a React component library built with TailwindCSS. It is offered in two separate packages atoms and forms. The atoms package contains base components whereas the forms package contains HTML form-specific components.'
      />

      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://elegantui.vercel.app/' />
      <meta property='og:title' content='ElegantUI: React component library' />
      <meta
        property='og:description'
        content='ElegantUI is a React component library built with TailwindCSS. It is offered in two separate packages atoms and forms. The atoms package contains base components whereas the forms package contains HTML form-specific components.'
      />
      <meta
        property='og:image'
        content='https://elegantui.vercel.app/background.png'
      />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://elegantui.vercel.app/' />
      <meta
        property='twitter:title'
        content='ElegantUI: React component library'
      />
      <meta name='twitter:site' content='@manan__joshi' />
      <meta
        property='twitter:description'
        content='ElegantUI is a React component library built with TailwindCSS. It is offered in two separate packages atoms and forms. The atoms package contains base components whereas the forms package contains HTML form-specific components.'
      />
      <meta
        property='twitter:image'
        content='https://elegantui.vercel.app/background.png'
      />
      <meta name='apple-mobile-web-app-title' content='ElegantUI' />
    </>
  ),
  floatTOC: true
};
