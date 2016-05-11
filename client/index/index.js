import { Template } from 'meteor/templating';
import './index.html';


Template.body.onCreated(function() {
    Meteor.subscribe('messages');
});
