var mongoose=require('mongoose');
var order=require('./order');
var userschema=new mongoose.Schema({
	name:{
		first:{
			type:String,
            //required:true
		},
		last:{
			type:String,
			//required:true
		}
	},
	username:String,
	address:{
		vicinity:String,
		city:String,
		state:String,
		pincode:Number},
	email:{
		type:String,
		//required:true,
		unique:true
	},
	password:String,
	role:{
		type:String,
		default:'customer',
		enum:['admin', 'customer']
	},
	order:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'order'
	},
	
	
});

var User=mongoose.model('user',userschema);
 
User.find({role:'admin'},function(err,users){
 if(err)
 {
 	return res.json({error:err});
 }
 if (users.length>0) {return}	
 else
  {
    var user=new User();
    user.role="admin";
    user.username="admin";
    user.set('password',"admin123");
    user.save(function(err){
    	if(err)
    		return err;
    return;
    });
   }
});

module.exports=User;