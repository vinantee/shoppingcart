var app=app||{};


var proddetailview=Backbone.View.extend({
 
el:'.user_content',
tpl:Handlebars.compile(
      document.getElementById('productdetail-template').innerHTML
    ),
initialize:function()
{
  app.view=this;
},
render:function(options)
{ 
    console.log("in render of proddetailview");
    console.log(options);
    if(options)
    {
     var id=options.id;
     var prod=new app.prodmodel({id:id});
     prod.fetch({
      success:function(product)
      {
         products=product.toJSON();
        console.log("In success of proddetail");
        console.log(products);
         
        this.$el.html(this.tpl({product:products}));
      }.bind(this),
      error:function()
      {
        console.log("Error");
      }
    });
   }
},

events:{
'submit #details':'prod'
},

prod:function(ev)
{
    console.log("In saveprod of proddetails");
    var proddetails=$(ev.currentTarget).serializeObject();
    console.log(proddetails.id)
     var userid=window.localStorage.getItem("userid");
    var addprod=new app.prodmodel({Id:proddetails.id, user:true,userid:userid});

    console.log(addprod.url);
    addprod.save(proddetails,{
    success:function(prod){
        console.log(" success of save");
        router.navigate('',{trigger: true});
    },
    error:function()
    {
      console.log("Error");
    }

    });
    return false;
}

});


