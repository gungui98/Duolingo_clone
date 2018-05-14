import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


export const dict = new Mongo.Collection('Dictionary');

export function getEn() {
        console.log(dict.find().fetch());
        let data = dict.find().fetch();
        let distinctData = _.uniq(data, false, function(d) {return d.en});
        return data;
}