var mongoose=require('mongoose');
var product=new mongoose.Schema({
	prodname:String,
	manufacturing_date:Number,
	Expiry_date:Number,
	real_price:Number,
	discount_price:Number,
	stock:{
		status:Boolean,
		quantity:Number
	},
});
module.exports=mongoose.model('product',product);