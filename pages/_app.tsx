import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../store';
import '../styles/globals.css';
import '../styles/Header/header.css';
import '../styles/Home/home.css';
import '../styles/Products/products.css';
import '../styles/Cart/cart.css';
import '../styles/Footer/footer.css';
import '../styles/Media/media.css'

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => <Component {...pageProps} />;

export default wrapper.withRedux(WrappedApp);
 