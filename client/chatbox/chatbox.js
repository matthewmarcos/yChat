import { Template } from 'meteor/templating';
import './chatbox.html';

Template.Chatbox.helpers({
    'message'() {
        return [
            {
                author: 'Anonymous',
                content: 'This is task 1',
                time: new Date()
            },
            {
                author: 'Anonymous',
                content: 'This is task 2',
                time: new Date()
            },
            {
                author: 'Anonymous',
                content: 'This is task 3',
                time: new Date()
            }
        ]
    }
});

Template.MessageTemplate.helpers({
    'formatTime'(time) {
        return time.getHours()%12 + ':'
            + time.getMinutes() + ':'
            + time.getSeconds() + '';
    }
});
