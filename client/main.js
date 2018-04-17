import { Meteor } from 'meteor/meteor';

import React from "react";
import {render} from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "../imports/assets/css/material-dashboard-react.css";

import indexRoutes from "../imports/routes/index.jsx";

const hist = createBrowserHistory();


Meteor.startup(() => {
    render(
        <Router history={hist}>
            <Switch>
                {indexRoutes.map((prop, key) => {
                    return <Route path={prop.path} component={prop.component} key={key} />;
                })}
            </Switch>
        </Router>,
        document.getElementById("root")
    );

});

