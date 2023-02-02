import { Helmet, HelmetProvider } from 'react-helmet-async';

function MainPage() {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Руководство</title>
        </Helmet>
        <h1>Hello</h1>
      </>
    </HelmetProvider>
  );
}

export default MainPage;
