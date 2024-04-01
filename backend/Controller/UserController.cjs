const User = require("../Modal/UserModel.cjs")

const bcrypt = require('bcrypt');

//api 

//to post

const addUser = async(req,res)=>{
    try {
        const user = new User({...req.body})
        console.log("User Data",user);
        console.log("Request Body",req.body);
        const newUser= await user.save()
        res.status(200).json({data:newUser})

    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}

const getUser = async(req,res)=>{
    try {
        const getAllUser = await User.find()
        res.status(200).json({status:200,data:getAllUser})
        
    } catch (error) {
        res.status(500).json({status:500,message:error.message})
        
    }
}


const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user with the provided email
      const userData = await User.findOne({ email: email });
        console.log("User Data",userData);
      if (!userData) {
        // User with the provided email doesn't exist
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Compare the provided password with the hashed password in the database
    //   const passwordMatch = await bcrypt.compare(password, userData.password);

    const passwordMatch = userData.password == password?true:false ;
  console.log("Password match",passwordMatch)
      if (!passwordMatch) {
        // Passwords do not match
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // If email and password are valid, you can send the user's data (excluding the password) as a response
      const userDataWithoutPassword = {
        _id: userData._id,
        email: userData.email,
        
        // Add other fields you want to include
      };
  
      res.status(200).json({ data: userDataWithoutPassword });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
 
  
  
  
  
  
  


module.exports={addUser,login,getUser}