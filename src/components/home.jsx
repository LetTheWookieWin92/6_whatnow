import React from "react";

// Components
import { Button } from "@material-ui/core";

const Home = (props) => {
	return (
		<Button
			variant="text"
			style={{ alignSelf: "center" }}
			color="primary"
			onClick={() => props.onSelection("Search Results")}
		>
			For testing
		</Button>
	);
};

export default Home;
