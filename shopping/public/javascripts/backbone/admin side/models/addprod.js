var app=app||{};


app.adminmodel=Backbone.Model.extend({
 url:'/admin'
});

app.editmodel=Backbone.Model.extend({
url:function(){
      if(this.get('id')) {
        return '/products/' + this.get('id');    
      }
      else{
      	return '/products';
      } 
    }
  
});
