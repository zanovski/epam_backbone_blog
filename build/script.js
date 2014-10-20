/*! app - v0.0.0 - 2014-10-20 */
Handlebars.registerHelper('preview', function(string) {
    return string ? string.substr(0, 100) : '';
});
this["app"] = this["app"] || {};
this["app"]["tmp"] = this["app"]["tmp"] || {};

this["app"]["tmp"]["add_post_modal.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"myModal\" class=\"modal fade in\" style=\"display: block;\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span></button>\r\n                <h4 class=\"modal-title\" id=\"myModalLabel\">New article</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form class=\"form-horizontal\" name=\"newArticle\" novalidate>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"title\" class=\"col-sm-2 control-label\">Title</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Title\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"image\" class=\"col-sm-2 control-label\">Image</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"image\" placeholder=\"http://images.com/myImage.jpg\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"article\" class=\"col-sm-2 control-label\">Article</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <textarea class=\"form-control\" id=\"article\"\r\n                                      placeholder=\"Article\" style=\"resize: none\"\r\n                                      rows=\"4\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"author\" class=\"col-sm-2 control-label\">Author</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"author\" placeholder=\"Name\" required>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" id=\"save\" class=\"btn btn-primary\" >Save</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
  },"useData":true});



this["app"]["tmp"]["edit_post_modal.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div id=\"myModal\" class=\"modal fade in\" style=\"display: block;\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span></button>\r\n                <h4 class=\"modal-title\" id=\"myModalLabel\">Edit article</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form class=\"form-horizontal\" name=\"newArticle\" novalidate>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"title\" class=\"col-sm-2 control-label\">Title</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"title\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" placeholder=\"Title\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"image\" class=\"col-sm-2 control-label\">Image</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"image\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.image : stack1), depth0))
    + "\" placeholder=\"http://images.com/myImage.jpg\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"article\" class=\"col-sm-2 control-label\">Article</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <textarea class=\"form-control\" id=\"article\"\r\n                                      placeholder=\"Article\" style=\"resize: none\"\r\n                                      rows=\"4\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.body : stack1), depth0))
    + "</textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"author\" class=\"col-sm-2 control-label\">Author</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"author\" placeholder=\"Name\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.author : stack1), depth0))
    + "\" required>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" id=\"save\" class=\"btn btn-primary\" >Save</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});



this["app"]["tmp"]["main_view.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<nav class=\"navbar navbar-default navbar-inverse\" role=\"navigation\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" href=\"#/\">Sample-blog</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a href=\"#/\">Home</a></li>\r\n            </ul>\r\n            <div class=\"navbar-right\">\r\n                <button id=\"add\" class=\"btn btn-success navbar-btn\">add Post</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"container\" id=\"view\"></div>";
  },"useData":true});



this["app"]["tmp"]["post_list.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "            <div class=\"panel panel-default\" style=\"box-shadow: 0 0 10px rgba(0,0,0,0.2)\">\r\n                <div class=\"panel-body\" style=\"background-image: url("
    + escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"image","hash":{},"data":data}) : helper)))
    + "); background-repeat: no-repeat; background-size: 400px; background-position:  750px 0;\">\r\n                    <a href=\"#post/"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\"><h4 style=\"display: inline-block\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h4></a>\r\n                    <p>";
  stack1 = ((helpers.preview || (depth0 && depth0.preview) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"preview","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</p>\r\n                    <small>created by: <a href=\"#/maybe/path/to/user/profile\">"
    + escapeExpression(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"author","hash":{},"data":data}) : helper)))
    + "</a></small> <small> at "
    + escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date","hash":{},"data":data}) : helper)))
    + "</small>\r\n                </div>\r\n            </div>\r\n";
},"2":function(depth0,helpers,partials,data) {
  return "";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.posts : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n</div>";
},"useData":true});



this["app"]["tmp"]["post_page.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.image : stack1), depth0))
    + "\" class=\"img-responsive img-thumbnail\" alt=\"image\">\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"row\">\r\n    <div class=\"col-xs-10\">\r\n        <h3>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h3>\r\n\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.image : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        <hr/>\r\n        <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.body : stack1), depth0))
    + "</p>\r\n        <small class=\"text-muted\">By "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.author : stack1), depth0))
    + "</small>\r\n    </div>\r\n    <div class=\"col-xs-2\">\r\n        <button id=\"edit\" class=\"btn btn-warning btn-lg btn-block\"><span class=\"glyphicon glyphicon-pencil\"></span> Edit</button>\r\n        <button id=\"del\" class=\"btn btn-danger btn-lg btn-block\"><span class=\"glyphicon glyphicon-remove\"></span> Remove</button>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
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
var Posts = Backbone.Collection.extend({
    url: 'http://restik.herokuapp.com/post',
    model: app.Post
});
var AddPostModalWindow = Backbone.View.extend({
    tagName: 'div',
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
        post = new app.Post(post);
        if(post.isValid()) {
            post.save();
            app.Posts.push(post);
        }
        this.remove();
    }
});

var EditPostModalWindow = Backbone.View.extend({
    tagName: 'div',
    template: app.tmp['edit_post_modal.hbs'],
    events: {
        'click .close': 'remove',
        'click #save': 'saveAndClose'
    },
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.append(this.template({post:this.model.attributes}));
        return this;
    },
    saveAndClose: function() {
        var update = {
            title: this.$('#title').val(),
            body: this.$('#article').val(),
            author: this.$('#author').val(),
            image: this.$('#image').val()
        };
        this.model.set(_.omit(update, function(value) {
            return value === '';
        }));
        Backbone.sync('update', this.model);
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
        this.viewContainer = this.$el.find('#view');
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    },
    addPost: function() {
        var modal = new AddPostModalWindow();
        this.$el.append(modal.el);
    },
    changePageView: function(subView) {
        this.subView && this.subView.remove();
        this.subView = subView;
        this.viewContainer.append(this.subView.render().el);
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
        'click #del': 'removePost',
        'click #edit': 'editPost'
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
    },
    editPost: function() {
        var modal = new EditPostModalWindow({
            model: this.model
        });
        this.$el.append(modal.el);
    }
});
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
        app.view.changePageView(new IndexView());
    },
    postPage: function(id) {
        app.view.changePageView(new PostView({
            model: app.Posts.findWhere({_id:id})
        }))
    }
});
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