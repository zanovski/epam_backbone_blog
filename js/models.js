app.Post = Backbone.Model.extend({

    urlRoot: 'http://restik.herokuapp.com/post',

    idAttribute: "_id",

    defaults: {
        title: '',
        body: '',
        date: new Date(),
        author:''
    },

    initialize: function(attr) {
        console.log('init model');
    },

    validate: function(attr) {
        console.log('validate');
        if(!attr.title || !attr.body || !attr.author){
            return true;
        }
    }

});