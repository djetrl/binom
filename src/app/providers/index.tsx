import React from 'react';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import theme from '../config/themeConfig';
import '../style/globals.css';

const  App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();
  return (
      <QueryClientProvider client={queryClient}>
            <div className="container">
                <ConfigProvider theme={theme}>
                  <Component {...pageProps} />
                </ConfigProvider>
            </div>
      </QueryClientProvider>
  );
}
export default App;