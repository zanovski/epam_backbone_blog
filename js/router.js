var Router = Backbone.Router.extend({
    routes: {
        '/':'index',
        'post/:id':'postPage',
        '*default':'index'
    },
    initialize: function() {
        app.view = new MainView();
        Backbone.history.start();
    },
    index: function() {
        app.view.changePageView((new IndexView()).render().el);
    },
    postPage: function(id) {
        app.view.changePageView((new PostView({
            model: app.Posts.findWhere({_id:id})
        })).render().el)
    }
});

app.Router = new Router();