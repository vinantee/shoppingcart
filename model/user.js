var mongoose=require('mongoose');
var User=new mongoose.Schema({
	name:{type:String,unique:true,required:true},
	address:{
		vicinity:String,
		city:String,
		state:String,
		pincode:Number},
	
});