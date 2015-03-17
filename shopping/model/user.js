var mongoose=require('mongoose');
var order=require('./order');
var user=new mongoose.Schema({
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
		enum:['admin', 'customer']
	},
	order:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'order'
	},
	
});

module.exports=mongoose.model('user',user);