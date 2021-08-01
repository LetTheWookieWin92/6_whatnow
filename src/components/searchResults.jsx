import React from 'react';

//Components
import NavigationBar from "./navigationBar";


const SearchResults = (props) => {
	return (
        <NavigationBar textLabel={props.title} showBack="Yes" backPressed={props.onBackPress}/>

    )
};

export default SearchResults;
