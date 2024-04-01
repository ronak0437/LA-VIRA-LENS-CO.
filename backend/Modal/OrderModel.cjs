const mongoose= require("mongoose")

const orderSchema= new mongoose.Schema({
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    address:{
        type:String
    },
    mobile_no:{
        type:String
    },
    pname:{
        type:String
    },
    ptype:{
        type:String
    }
    ,
    pprice:{
        type:String
    },
    qty:{
        type:String
    },
    total:{
        type:String
    }
    

})

const order =  mongoose.model('order',orderSchema)

module.exports= order