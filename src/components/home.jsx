import React from 'react';

//Theme
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
 
const Home = () => {
    return ( 
        <ThemeProvider theme={theme}>
            <h1>hi</h1>
        </ThemeProvider>
     );
}
 
export default Home;