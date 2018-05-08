import { Meteor } from 'meteor/meteor';

import React from "react";
import {render} from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import {Session} from 'meteor/session';


import "../imports/assets/css/material-dashboard-react.css";

import indexRoutes from "../imports/routes/index.jsx";

const hist = createBrowserHistory();
import {dict} from "../imports/api/Dictionary.jsx";

// https://stackoverflow.com/questions/15129827/meteor-how-can-i-tell-when-the-database-is-ready
       // putting my animation template active
if (Meteor.isClient) {
    Session.set('loadingSuscribe',true);
    Meteor.subscribe('Dictionary',function(){
        Session.set('loadingSuscribe',false);
        console.log("loaded")
    });
}
Meteor.startup(() => {
        render(
            <Router history={hist}>
                <Switch>
                    {indexRoutes.map((prop, key) => {
                        return <Route path={prop.path} component={prop.component} key={key}/>;
                    })}
                </Switch>
            </Router>,
            document.getElementById("root")
        );
    }
);
