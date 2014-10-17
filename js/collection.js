var Posts = Backbone.Collection.extend({
    url: 'http://restik.herokuapp.com/post',
    model: app.Post,
    initialize: function() {
        this.fetch();
    }
});

app.Posts = new Posts();