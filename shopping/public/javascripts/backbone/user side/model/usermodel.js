var app=app||{};


app.usermodel=Backbone.Model.extend({
 url:'/user'
});
app.prodmodel=Backbone.Model.extend({
url:function(){
	console.log(this.get('user'));
	console.log(this.get('id'));
      if(this.get('id')) {
      	if (this.get('user'))
      		return '/products/user/' + this.get('id');
      	else
        return '/products/' + this.get('id');    
      }
      else{
      	return '/products';
      } 
    }

  
});
