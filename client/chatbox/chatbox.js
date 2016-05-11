import { Template } from 'meteor/templating';
import { Messages } from '../../imports/collections/messages.js'
import './chatbox.html';

Template.Chatbox.helpers({
    'message'() {
        return Messages.find();
    }
});

Template.MessageTemplate.helpers({
    'formatTime'(time) {
        return time.getHours()%12 + ':'
            + time.getMinutes() + ':'
            + time.getSeconds() + '';
    }
});
