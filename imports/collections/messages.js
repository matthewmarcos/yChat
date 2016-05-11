import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Messages = new Mongo.Collection('messages');

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish('messages', function messagesPublication() {
        return Messages.find({});
    });
}

Meteor.methods({
    'User/InsertMessage'(content) {
        return Messages.insert({
            author: 'Anonymous',
            time: new Date(),
            content
        });
    }
});
