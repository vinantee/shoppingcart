var app=app||{};


var userview=Backbone.View.extend({
 
el:'.user_content',
tpl:Handlebars.compile(
      document.getElementById('user-template').innerHTML
    ),
render:function()
{ 
    console.log("in render of user");
     
    var prod=new app.prodmodel();
  
      prod.fetch({
      success:function(product)
      {
         products=product.toJSON();
        console.log("In success of user");
        console.log(products);
        this.$el.html(this.tpl({product:products}));
      }.bind(this),
      error:function()
      {
        console.log("Error");
      }
    });
    

},

events:{

},


});