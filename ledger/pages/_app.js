import React from 'react';
import 'fontsource-roboto';
import AppToolBar from "../components/toolbar";
import {wrapper} from "../store";

const WrappedApp = ({Component, pageProps}) => (
    <div>
        <AppToolBar/>
        <Component {...pageProps} />
    </div>
)

export default wrapper.withRedux(WrappedApp)