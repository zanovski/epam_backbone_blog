var Posts = Backbone.Collection.extend({
    url: 'http://restik.herokuapp.com/post',
    model: app.Post
});