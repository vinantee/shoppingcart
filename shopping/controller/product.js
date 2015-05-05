var mongoose=require('mongoose');
var Prod=require('../model/product');
var Order=require('../model/order');
module.exports=function()
{
	 var product={};
   product.create=function(req,res)
   {
    console.log("hi");
    console.log(req.body);
   	var prod = new Prod(req.body);
    console.log("---Helooo-------");
    console.log(prod.stock.quantity);
     if(prod.stock.quantity>=1)
        {
          prod.stock.status=true;
        }
        else{
          console.log("----------------");
          prod.stock.status=false;
        }
    prod.save(function(err,prod){
         console.log(err);
   			if(err)
   				return res.json({error:err});

        if(prod)

   			   return res.json(prod);
   		});
    }
    product.listprod=function(req,res)
    {
      Prod.find({},function(err,prod){
        if(err)
        {
          return res.json({error:err});
        }
        if(prod)
        {
          console.log(prod);
          return res.json(prod);
        }
      });
    }
    product.eproduct=function(req,res)
    {
      console.log(req.params.id);
      Prod.findById(req.params.id,function(err,product){
        console.log(product);
       if (err) 
        return res.json({error:err});
       if(product)
       {
        return res.json(product);
       }
    });
    }
    product.updateproduct=function(req,res)
    {
      console.log(req.params.id);
      Prod.findByIdAndUpdate(req.params.id,{$set:req.body},function(err,product){
        
       if (err) 
        return res.json({error:err});

       if(product)
       {
        return res.json(product);
       }
    });
    }
   product.updateuseritem=function(req,res)
   {
    console.log("In updateuserproduct");
    Prod.findById(req.params.id,function(err,prod){
      if(err)
       {
         return res.json({error:err});
       }
         console.log(req.body);
         console.log(req.params.id);
         console.log(prod.stock.quantity);
         console.log(typeof prod.stock.quantity);
        // console.log(typeof parseInt(prod.stock.quantity));
         if(prod.stock.quantity>0)
         { 
         prod.stock.quantity=(prod.stock.quantity)-1;
         console.log("------quantity-------");
         console.log(prod.stock.quantity);
         if(prod.stock.quantity>=1)
         {
           console.log("-------prod.stock------");
           console.log(prod.stock.quantity);
           prod.stock.status=true;
         }
         else
         {
           console.log("------------");
           console.log(prod.stock.status);
           prod.stock.status=false;
         }

         prod.save(function(err,prod1)
         {
           if(err)
            return res.json({error:err});
            console.log(prod1)
            var order = new Order({product:req.body.Id,user:req.body.userid});
            console.log(order);
            order.save(function(err,order)
            {
              if(err)
                console.log(err);
                return res.json({error:err});
              if(order)
                console.log(order);
                return res.json(order);
            });
           return res.json(prod1);
         });
         }
         
       });
      }
     
    

  return product;
}