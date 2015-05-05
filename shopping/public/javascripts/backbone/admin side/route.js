 var app = app || {};

 var Router=Backbone.Router.extend({
 
  routes:{
   ''           :'admin',
  'products'    :'addproduct',
  'products/:id':'updateprod'

 }
});
  var router = new Router;

    router.on('route:admin',function(){
    console.log("HIII"); 
    var admin = new adminv();
    admin.render();
  });

     router.on('route:addproduct',function(){
     console.log("Bye");
     var add = new addproduct();
     add.render();
  });

     router.on('route:updateprod',function(id){
     console.log("in updateprod route");
     var edit = new editView();
     edit.render({id:id});
  });

  Backbone.history.start();