
 var Router=Backbone.Router.extend({
 
  routes:{
  	''  :'login',
  	'register' :'register'
  }
});

 var router = new Router; 
 router.on('route:login',function(){
   console.log("HEllo"); 
   var Login = new LoginView();
   Login.render();
   });
 router.on('route:register',function(){
   console.log("reg"); 
   var reg = new registerview();
    reg.render();
  });


Backbone.history.start();
