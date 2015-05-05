var mongoose=require('mongoose');
var productschema=new mongoose.Schema({

	productId:Number,
	prodname:String,
	manufacturing_date:Date,
	Expiry_date:Date,
	real_price:Number,
	discount_price:Number,
	stock:{
		status:Boolean,
		quantity:Number
	},
	
});
module.exports=mongoose.model('product',productschema);