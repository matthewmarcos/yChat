Template.controls.events({

    'submit form'(e, tempalte) {
        e.preventDefault();

        const text = $(e.target).find('[name="message"]').val();
        console.log(text);
    },

    'click #clear'(e) {
        e.preventDefault();
    }
});
