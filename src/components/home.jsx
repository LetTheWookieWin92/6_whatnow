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
            
        </ThemeProvider>
     );
}
 
export default Home;