var app=app||{};

var LoginView= Backbone.View.extend({
el:'.login_content',
tpl:Handlebars.compile(
	document.getElementById('login-template').innerHTML
),
render:function()
{
    console.log("In render");
	this.$el.html(this.tpl);
},
events:{
	'submit #Login':'sign'
	
},

sign:function(ev)
{
	var signup = $(ev.currentTarget).serializeObject();
	var user=new app.LoginModel();
    console.log(user);
	user.save(signup,{
		success:function(users){
            
            users = users.toJSON();
            window.localStorage.setItem("userid", users._id);
            if(users.role==='customer')
            {   
            window.location='/user';
            }
            else
            {
                window.location='/admin';
            }
        },
        error:function()
        {
        	console.log("Error");
        }
       });
    return false;
}


});