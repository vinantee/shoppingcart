var mongoose=require('mongoose');
var product=require('./product');
var user=require('./user');
var order=new mongoose.Schema({
    date:Number, 
	user:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'user'
	},
	product:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'product'
	},

});
module.exports=mongoose.model('order',order);