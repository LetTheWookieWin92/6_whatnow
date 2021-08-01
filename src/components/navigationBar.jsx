import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from '@material-ui/core/IconButton';
import { ArrowBack } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import BackgroundMusic from "./backgroundMusic";

//Images
import logo from '../images/Logo.png'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const NavigationBar = ({ backLabel, backPressed, showBack }) => {

    const classes  = useStyles();

    return ( 
        <React.Fragment>

            <AppBar color="transparent" position="static" elevation={0} className={classes.root}>
                <Toolbar>

                <Grid container justify={"space-between"}>
                    <Grid item>
                        {showBack === "Yes" && (
                            <IconButton edge="start" color="primary" aria-label="menu" onClick={ () => {backPressed("Home")}} >
                                <ArrowBack />
                            </IconButton>
                        )}
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" className={classes.title}>
                            <img src={logo} alt="Content Missing" />
                        </Typography>
                    </Grid>
                    <Grid item>
                        <BackgroundMusic />
                    </Grid>
                </Grid>



                    
                    
                    
                </Toolbar>
            </AppBar>
            
        </React.Fragment>
     );
}
 
export default NavigationBar;