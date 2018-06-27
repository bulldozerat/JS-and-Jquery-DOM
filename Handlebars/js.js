Handlebars.registerHelper("test",function (props) {
    return props; 
});

Handlebars.registerHelper("makeBold", function (options) {
    return new Handlebars.SafeString("<strong>" + options.fn(this) + "</strong>");
});

$(document).ready(function () {
    var charTemplate = $('#character-template').html();
    var comp = Handlebars.compile(charTemplate);

    $.ajax("cast.json").then(function (data) {
     $('#test').html(comp(data));
    });

    $("#test").on('click','.age', function () {
        alert(123);
    });
});