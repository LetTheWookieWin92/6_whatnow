import React, { Component } from "react";

//Theme
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

//Components
import NavigationBar from "./navigationBar";
import BackgroundMusic from "./backgroundMusic";
import Home from "./home";
import SearchResults from "./searchResults";

class Display extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayMode: "Home",
		};

		this.changeDisplayMode = this.changeDisplayMode.bind(this);
	}

	changeDisplayMode(mode) {
		this.setState({ displayMode: mode });
	}

	renderDisplayMode(mode) {
		switch (mode) {
			case "Home":
				return <Home onSelection={this.changeDisplayMode} />;

			case "Search Results":
				return <SearchResults onSelection={this.changeDisplayMode} />;

			default:
				return <h1>Nothing to see here</h1>;
		}
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				<NavigationBar textLabel="WhatNow?" showBack="No" />
				<BackgroundMusic />

				{this.renderDisplayMode(this.state.displayMode)}
			</ThemeProvider>
		);
	}
}

export default Display;
