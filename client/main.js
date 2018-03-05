import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.js';

Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
});

Template.body.onRendered(function() {
    let settings = 'pjs-settings.json';
    this.autorun(() => {
        if (particlesJS) {
            console.log(`loading particles.js config from "${settings}"...`)
            /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
            particlesJS.load('particles-js', settings, function () {
                console.log('callback - particles.js config loaded');
            });
        }
    });
});