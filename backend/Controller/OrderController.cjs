const Order = require("../Modal/OrderModel.cjs")



//api 

//to post

const addOrder = async(req,res)=>{
    try {
        const order = new Order({...req.body})
        const newOrder= await order.save()
        res.status(200).json({data:newOrder})

    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}


const getOrder = async(req,res)=>{
    try {
        const getAllOrder = await Order.find()
        res.status(200).json({status:200,data:getAllOrder})
        
    } catch (error) {
        res.status(500).json({status:500,message:error.message})
        
    }
}

module.exports={addOrder,getOrder}