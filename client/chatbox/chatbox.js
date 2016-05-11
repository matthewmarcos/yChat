import { Messages } from '../../imports/collections/messages.js'
import { Template } from 'meteor/templating';
import { Tracker } from 'meteor/tracker';
import './chatbox.html';

Template.Chatbox.helpers({
    'message'() {
        return Messages.find();
    }
});

Template.Chatbox.onRendered(function() {

    // Autoscrolls div to botton when a new class is added
    Tracker.autorun(_ => {
        let elem = $('.chatbox')[0];
        const message = Messages.find().fetch();
        if(message) {
            elem.scrollTop = elem.scrollHeight;
        }

    });
});

Template.MessageTemplate.helpers({
    'formatTime'(time) {
        return time.getHours()%12 + ':'
            + time.getMinutes() + ':'
            + time.getSeconds() + '';
    }
});
