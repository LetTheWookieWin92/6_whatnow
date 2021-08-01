import React from "react";

// Components
import { Button } from "@material-ui/core";
import NavigationBar from "./navigationBar";

const Home = (props) => {
	return (
        <React.Fragment>
            <NavigationBar textLabel="WhatNow?" showBack="No" />
            <Button
                variant="text"
                style={{ alignSelf: "center" }}
                color="primary"
                onClick={() => props.onSelection("Search Results")}
            >
                For testing
            </Button>
        </React.Fragment>   
	);
};

export default Home;
