var app=app||{};

var editView=Backbone.View.extend({
 
el:'.admin',
tpl:Handlebars.compile(
      document.getElementById('add-prod-template').innerHTML
    ),
render:function(options)
{ 
    console.log("In render of edit");
    if(options)
   {
     var Id=options.id;
    var edit = new app.editmodel({id:Id});
    edit.fetch({
    success:function(proddetails)
    {
        console.log(proddetails.toJSON());
        this.$el.html(this.tpl({editdetails:proddetails.toJSON()}));
    }.bind(this),
    error:function()
    {
        console.log("Error");
    }
    });
  }
},
	
events:{
'submit #addprod':'saveprod'
},


saveprod:function(ev)
{
    console.log("In saveprod of edit");
	var proddetails=$(ev.currentTarget).serializeObject();
    var addprod=new app.editmodel({id:proddetails.id});
    console.log(addprod);
    addprod.save(proddetails,{
    success:function(prod){
        console.log(" in edit success of save");
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
