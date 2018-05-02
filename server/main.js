import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import {dict} from "../imports/api/Dictionary.jsx";
const notes = new Mongo.Collection('notes');
const userInfo = new Mongo.Collection('user_info');
Meteor.startup(() => {
    if (Meteor.isServer) {
        Meteor.publish('Dictionary', function () {
            return dict.find();
        });
        Meteor.publish('notes', function () {
            return notes.find();
        });
        Meteor.publish('user_info', function () {
            return userInfo.find();
        });
    }
});