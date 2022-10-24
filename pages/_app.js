import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/Layout';
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ToastContainer limit={1} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
