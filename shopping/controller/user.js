
/*
 * GET users listing.
 */
var mongoose=require('mongoose');
var users=require('../model/user');
var products=require('../model/product');
module.exports=function()
{
	  var user={};
    user.ll = function(req,res){
      return res.render('login.html');
    }
    user.create=function (req,res) {
      console.log("In reg create");
      console.log(req.body);
		var user=new users(req.body);
    
		user.save(function(err,user){
      console.log(err);
     if(err)
     {
			  return res.json({error:err});
     }
     if(user)
      {
        return res.json(user);
      }	
		});
	}
	user.login=function(req,res){
    console.log(req.body.username);
    console.log(req.body.password);
		users.findOne({username:req.body.username,password:req.body.password},function(err,user){
      if(err)
      {
        res.status=401;
        return res.json({error:err});
      }
       if(user) {
        console.log(user);
        return res.json(user);
        } else {
        console.log("Invalid Username or Password");
        return res.json(401, {error: "Invalid username or password"});
      }

        
    });
  }
         	
    user.index=function(req,res)
    {
      return res.render('admin.html');
    }

    user.userlogin=function(req,res)
    {
      return res.render('user.html');
    }
    
     
     /*user.showproduct=function(req,res)
      {
         users.findById(req.body.id
          .populate('user','prodname real_price')
          .exec(function(err,user){
         if(err)
            return res.json({error:err});
            return res.json(user);
         });
      }*/
		
	
	return user;
}