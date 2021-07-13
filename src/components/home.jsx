import React from 'react';

//Theme
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

//Components
import NavigationBar from './navigationBar';
import BackgroundMusic from './backgroundMusic';
 
const Home = () => {
    return ( 
        <ThemeProvider theme={theme}>
            <NavigationBar textLabel="WhatNow?"  showBack="No"/>
            <BackgroundMusic />

            <h1>.</h1>
            

        </ThemeProvider>
     );
}
 
export default Home;