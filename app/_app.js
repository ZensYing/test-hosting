// pages/_app.js

import 'aos/dist/aos.css'; // Import the AOS CSS
import AOS from 'aos'; // Import the AOS library
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
