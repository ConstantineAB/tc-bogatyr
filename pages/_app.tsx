import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../store';
import { motion } from 'framer-motion';
import '../styles/globals.css';


const WrappedApp: FC<AppProps> = ({Component, pageProps, router}) => 
    <motion.div key={router.route} initial="hidden" animate="visible" variants={{
        hidden: {
            scale: .8,
            opacity: 0 
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: .4
            }
        }
    }}>
        <Component {...pageProps} />
    </motion.div>

export default wrapper.withRedux(WrappedApp);
 