import React from 'react';
import { NavLink } from "react-router-dom";
export default class MyHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header" />
                    <ul className="nav navbar-nav">
                        <li ><NavLink exact activeStyle={{ color: 'white', textDecoration: 'none' }} to="/">Home <span className="sr-only">(current)</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: 'white', textDecoration: 'none' }} to="/search">Search</NavLink></li>
                        <li><NavLink activeStyle={{ color: 'white', textDecoration: 'none' }} to="/details">Details</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }

} 
