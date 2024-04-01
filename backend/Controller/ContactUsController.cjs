const Contact = require("../Modal/ContactUsModel.cjs")



//api 

//to post

const addcontact = async(req,res)=>{
    try {
        const contact = new Contact({...req.body})
        const newContact= await contact.save()
        res.status(200).json({data:newContact})

    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}


const getContact = async(req,res)=>{
    try {
        const getAllContact = await Contact.find()
        res.status(200).json({status:200,data:getAllContact})
        
    } catch (error) {
        res.status(500).json({status:   500,message:error.message})
        
    }
}

module.exports={addcontact,getContact}