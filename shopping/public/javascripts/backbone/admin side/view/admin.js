var app=app||{};

var adminv = Backbone.View.extend({
 el:'.admin',
tpl:Handlebars.compile(
      document.getElementById('admin-template').innerHTML
    ),
render:function(options)
{ 
    console.log("render of adminv");
    var listprod=new app.editmodel();
    console.log(listprod.toJSON());
    listprod.fetch({
      success:function(prod)
      {
        console.log(prod.toJSON());
        var proddetails=prod;
        this.$el.html(this.tpl({products:proddetails.toJSON()}));
      }.bind(this),
      error:function()
      {
        console.log("Error");
      }
    });

	
},
});