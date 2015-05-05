var app=app||{};


var addproduct=Backbone.View.extend({
 
el:'.admin',
tpl:Handlebars.compile(
      document.getElementById('add-prod-template').innerHTML
    ),
render:function()
{ 
    console.log("hel");
	this.$el.html(this.tpl);
},
events:{
'submit #addprod':'saveprod' 
},

saveprod:function(ev)
{
    console.log("In saveprod");
	var proddetails=$(ev.currentTarget).serializeObject();
    var addprod=new app.editmodel();

    console.log(addprod);
    addprod.save(proddetails,{
    success:function(prod){
        console.log("success");
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



