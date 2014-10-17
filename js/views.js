var AddPostModalWindow = Backbone.View.extend({
    template: app.tmp['add_post_modal.hbs'],
    events: {
        'click .close': 'remove',
        'click #save': 'saveAndClose'
    },
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.append(this.template);
        return this;
    },
    saveAndClose: function() {
        var post = {
            title: this.$('#title').val(),
            body: this.$('#article').val(),
            author: this.$('#author').val(),
            image: this.$('#image').val()
        };
        post = new app.Post(post); //todo нужно исправить добавление в шаблон.
        post.save();
        this.remove();
    }
});

var MainView = Backbone.View.extend({
    el: $('#app'),
    template: app.tmp['main_view.hbs'],
    events: {
        'click #add': 'addPost'
    },
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    },
    addPost: function() {
        var div = $('<div></div>');
        this.$el.append(div);
        new AddPostModalWindow({el: div});
    },
    changePageView: function(subView) {
        var view = this.$el.find('#view');
        view.html('').append(subView);
    }
});

var IndexView = Backbone.View.extend({
    tagName: 'div',
    template: app.tmp["post_list.hbs"],
    initialize: function() {
        this.$el.html('');
        this.listenTo(app.Posts, 'all', this.render);
        this.render()
    },
    render: function() {
        this.$el.html(this.template({posts: app.Posts.toJSON()}));
        return this;
    }
});

var PostView = Backbone.View.extend({
    template: app.tmp['post_page.hbs'],
    events: {
        'click #del': 'removePost'
    },
    initialize: function() {
        this.listenTo(this.model, 'all', this.render);
        this.render()
    },
    render: function() {
        this.$el.html(this.template({post: this.model.toJSON()}));
        return this;
    },
    removePost: function() {
        this.model.destroy();
        app.Router.navigate('/', true);
    }
});