import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { Provider } from 'react-redux';

import { theme, createEmotionCache } from '@/constants';
import { initializeStore } from '@/redux/store';
import { MyAppProps } from '@/types';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps, emotionCache }: MyAppProps) {
  const styleCache = useMemo(() => emotionCache || createEmotionCache(), [emotionCache]);
  const store = useMemo(() => {
    return initializeStore(pageProps.internal?.initialReduxState);
  }, [pageProps.internal?.initialReduxState]);

  return (
    <Provider store={store}>
      <CacheProvider value={styleCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
          <ToastContainer />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}
export default MyApp;

