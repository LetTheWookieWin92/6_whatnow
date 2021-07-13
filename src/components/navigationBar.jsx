import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from '@material-ui/core/IconButton';
import { ArrowBack } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

//Images
import logo from '../images/Logo.png'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
        alignItems: 'center',

    }
}));

const NavigationBar = ({ backLabel, backPressed, showBack }) => {

    const classes  = useStyles();

    return ( 
        <React.Fragment>
            <AppBar color="transparent" position="static" elevation={0} className={classes.appBar}>
                <Toolbar>
                    {showBack === "Yes" && (
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={ () => {backPressed("Home")}} >
                            <ArrowBack />
                        </IconButton>
                    )}
                    <img src={logo} alt="Content Missing"/>
                </Toolbar>
            </AppBar>
        </React.Fragment>
     );
}
 
export default NavigationBar;