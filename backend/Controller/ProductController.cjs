const Product = require("../Modal/Productmodel.cjs")


const addProduct= async(req,res)=>{
    try {
        const product = new Product({...req.body},)
        const newProduct= await product.save()
        res.status(200).json({data:newProduct})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({status:500,message:error.message})
        
    }



}

//get all product

const getProduct = async(req,res)=>{
    try {
        const getAllProduct = await Product.find()
        res.status(200).json({status:200,data:getAllProduct})
        
    } catch (error) {
        res.status(500).json({status:500,message:error.message})
 }
}

//get individual product data
const getIndProduct = async(req,res)=>{
    const {id}=req.params
    try {
        const getProduct = await Product.findById({_id:id})
        res.status(200).json({status:200,data:getProduct})
        
    } catch (error) {
        res.status(500).json({status:500,message:error.message})
        
    }
}

//update 

const updateProduct= async(req,res)=>{
    const {id}=req.params
    try {
        const editProduct = await Product.findByIdAndUpdate({_id:id},req.body,{new:true})
        res.status(200).json({status:200,data:editProduct})
        
    } catch (error) {
        res.status(500).json({status:500,message:error.message})

        
    }
}

//delete 

const deleteProduct = async(req,res)=>{
    const {id}=req.params
    try {
        const deletePro = await Product.findByIdAndDelete({_id:id})
        res.status(200).json({status:200,message:"Deleted Succesfully"})
    } catch (error) {
        res.status(500).json({status:500,message:error.message})
        
    }
}


module.exports={
addProduct,getProduct,getIndProduct,updateProduct,deleteProduct


}