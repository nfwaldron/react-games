import React from "react";
import App from "next/app";
import {GlobalThemeProvider} from "../ui/theme";

class MemoryGameApp extends App {
    public render () {
        const {Component, pageProps} = this.props;
        return(
            <GlobalThemeProvider>
                <Component {...pageProps}/>
            </GlobalThemeProvider>
        )
    }
}

export default MemoryGameApp;
