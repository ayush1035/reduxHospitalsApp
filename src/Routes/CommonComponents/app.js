import React from "react";
import MyHeader from "./header.js";
import HomeC from "../Home/homeContainer.js";
import SearchC from "../Search/searchContainer.js";
import DetailC from "../Detail/detailsContainer.js";


import { Route, Switch } from "react-router-dom";
export default class MyApp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MyHeader />
                <div className="loader">
                    <Switch>
                        <Route exact path="/" component={HomeC} />} />
                    <Route path="/search" component={SearchC} />} />
                    <Route path="/details/:id" component={DetailC} />} />
                  </Switch>
                </div>

            </div>
        );
    }
}