var app=app || {};
app.LoginModel = Backbone.Model.extend({
    url:'/login'
   
});

app.registerModel= Backbone.Model.extend({
 url:'/register'
});