import { Template } from 'meteor/templating';
import './index.html';
import '../../imports/startup/accounts-config.js';

Template.body.onCreated(function() {
    Meteor.subscribe('messages');
});
