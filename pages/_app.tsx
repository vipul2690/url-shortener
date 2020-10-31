import React from 'react';

import '../styles/globals.css';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }): JSX.Element {
    return <Component {...pageProps} />;
}

export default MyApp;
