import '../styles/fonts.css';
import Layout from '../components/Layout';
import { GlobalStyle } from '../styles/globals';
import {theme} from '../theme/theme';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} /> 
      </Layout>
    </ThemeProvider>
    </>
    )
}

export default MyApp
