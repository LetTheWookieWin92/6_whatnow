import React from "react";

//Theme
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

//Components
import NavigationBar from "./navigationBar";
import BackgroundMusic from "./backgroundMusic";
import { Button } from "@material-ui/core";

const Home = () => {
	return (
		<ThemeProvider theme={theme}>
			<NavigationBar textLabel="WhatNow?" showBack="No" />
			<BackgroundMusic />

			<Button variant="text" style={{ alignSelf: "center" }} color="primary">
				For testing
			</Button>
		</ThemeProvider>
	);
};

export default Home;
