import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import MainLayout from '../components/layout/MainLayout';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  )
}

export default MyApp;
