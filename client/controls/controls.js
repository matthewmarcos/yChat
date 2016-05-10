import { Template } from 'meteor/templating';
import './controls.html';

Template.Controls.events({
    'click #submit-button'(e, tempalte) {
        e.preventDefault();
        const text = $('#message-input').val();
        console.log('Text: ' + text);
    }
});
