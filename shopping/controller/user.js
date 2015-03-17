
/*
 * GET users listing.
 */
var mongoose=require('mongoose');
var users=require('../model/user');
module.exports=function()
{
	  var user={};
    user.ll = function(req,res){
      return res.render('index');
    }
    user.create=function (req,res) {
		var user=new users(req.body);
    
    console.log(user);
		user.save(function(err,user){

			if(err)
			  return res.json({error:err});
              return res.render('index');	
		});
	}
	user.login=function(req,res,next){
		users.find({username:req.body.username,password:req.body.password},function(err,user){
      if(err)
      {
        res.status=404;
        return res.json({error:err});
      }
      else
       return res.render('products_shown'); 
    });
  }
         	
    user.index=function(req,res)
    {
      
      return res.render('register_form');
    }
      
      //user.read=function(req,res)
      //{
        // users.findById(req.body.id,function(err,user){
         //if(err)
           // return res.json({error:err});
         //return res.json(user);
         //});
      //}
		

	
	return user;
}