import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';

export const Questions = new Mongo.collection('questions');
meteor.methods({
	'questions.find'(){
		return Questions.find(namelevel);
	},
	'questions.getquestion'(level){
		return Questions.find(namelevel: level, questions);
	}
});