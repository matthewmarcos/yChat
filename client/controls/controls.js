import { Template } from 'meteor/templating';
import { Messages } from '../../imports/collections/messages.js'
import './controls.html';

Template.Controls.events({
    'click #submit-button'(e, tempalte) {
        // Stop default html behavior
        e.preventDefault();

        // use jquery to get user input in text field
        const text = $('#message-input').val();

        // Another option to get the input is:
        // const text = document.getElementById('message-input').value;

        if(text === '') {
            // If user input is empty,
            // return.
            return false;
        }

        Meteor.call('User/InsertMessage', text, function(err, res) {
            if(err) {
                // If method throws a new Meteor Error
                return;
            }

            // Reset value of the textbox
            $('#message-input').val('');

        });
    }
});
