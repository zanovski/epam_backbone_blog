app.init = function() {
    app.Posts = new Posts();
    app.Posts.on('loaded', function() {
        app.Router = new Router();
    });
    app.Posts.fetch({success:function() {
        app.Posts.trigger('loaded');
    }});
};
app.init();