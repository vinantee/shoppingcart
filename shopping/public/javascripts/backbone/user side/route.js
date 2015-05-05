var app = app || {};


var Router=Backbone.Router.extend({
 
  routes:{
  	''   :'user',
    'products/:id':'details'
  }
});
 
     Backbone.View.prototype.close = function () {
    
      //COMPLETELY UNBIND THE VIEW
      this.undelegateEvents();
      this.$el.removeData().unbind();
      this.$el.empty();
    };


  var router = new Router; 
   router.on('route:user',function(){
   console.log("in user"); 
   var user=new userview();
   user.render();
   });

   router.on('route:details',function(id){
   console.log("in details"); 
   var proddetail=new proddetailview();
   proddetail.render({id:id});
   });

   Backbone.history.start();