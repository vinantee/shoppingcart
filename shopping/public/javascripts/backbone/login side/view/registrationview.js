var app=app||{};

var registerview = Backbone.View.extend({

   el:'.login_content',
   tpl:Handlebars.compile(
      document.getElementById('Registration-template').innerHTML
    ),
   render:function()
   { 
    console.log("render");
    this.$el.html(this.tpl);
    },
    events:{
    'submit #register':'register'
    
    },
    register:function(ev)
    {
        var reg = $(ev.currentTarget).serializeObject();
        var register = new app.registerModel();
        console.log(register);
        register.save(reg,{
        success:function(user)
        {
            console.log('reg success');
            router.navigate('',{trigger:true});
        },
        error:function()
        {
            console.log("Error");
        } 
        });
        return false;
    }
    

});
