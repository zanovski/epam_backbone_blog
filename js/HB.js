Handlebars.registerHelper('preview', function(string) {
    return string ? string.substr(0, 100) : '';
});