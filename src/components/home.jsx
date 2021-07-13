import React from 'react';

//Theme
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

//Components
import NavigationBar from './navigationBar';
 
const Home = () => {
    return ( 
        <ThemeProvider theme={theme}>
            <NavigationBar textLabel="WhatNow?"  showBack="No"/>
            <h1>hi</h1>
            

        </ThemeProvider>
     );
}
 
export default Home;