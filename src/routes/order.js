import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Shape from '../Assets/Aboutus/titleabout_us.png';
import { useNavigate } from 'react-router-dom';
import './orderstyles.css';
const Order = () => {

  const location = useLocation();
  console.log("Order:====",location.state.item)
  const navigation =useNavigate()

  const [ptype, setPtype] = useState(location.state.item.cType);
    const [pname, setPname] = useState(location.state.item.pname);
    const [desc, setDesc] = useState(location.state.item.desc);
    const [pprice, setPrice] = useState(location.state.item.price);

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [mobile_no, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [qty, setQty] = useState(0);

    
  

    let Total = qty * pprice

    
   


  const handleSubmit = async (e) => {
    e.preventDefault();
   
   
  
    
  console.log("fname",fname);
  console.log("lname",lname);
  console.log("mobile",mobile_no);
  console.log("address",address);
  console.log("pname",pname);
  console.log("desc",desc);
  console.log("price after total",pprice);
  console.log("qty",qty);
  console.log("type",ptype);



   
    if(pname !== "" || desc !=="" || ptype !=="" || pprice !=="" || fname !=="" || lname !=="" || mobile_no !== "" || address !=="" || qty !== "")
    {
      let total = qty * pprice
      let item={pname,desc,ptype,pprice,total,fname,lname,mobile_no,address,qty}
      
  
      const data = await fetch('http://localhost:8080/api/addOrder', {
        method: 'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      },
        body:JSON.stringify(item)
      });
  
      const res = await data.json();
      console.log(res)
      if (res.status === 200) {
        alert('Thank you your order is placed successfully....');
        navigation("/shopping")
        
      } else {
        alert('Thank you your order is placed successfully....');
        navigation("/shopping")
      }

    }
    else
    {
      alert("Hellllllllllllllooooooooooooooo")
    }
    
   
   

  }





  return (
    <div className="container">
      <div  className='image-header'>
        <img alt="logoimg" src={Shape}width="1300" height="50"  />
        <h1 className='image-text'>SHOP NOW</h1>
        </div>
      <form className="mt-4" method="POST" enctype="multipart/form-data">
        <div >

          <div class="mb-3 col-lg-6 col-md-6 col-12">

            <label for="exampleInputEmail1" className="fname">First Name</label>
           <div className='labelpname'><input type="text" name="pname" value={fname} onChange={(e)=>setFname(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></div> 

          </div>

          {/* <div class="mb-3 col-lg-6 col-md-6 col-12">

            <label for="exampleInputEmail1" class="form-label">Select image</label>
            <input
          
              type="file"
              name="image"
      
              onChange={(e) => setdata(e.target.files[0])}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />

          </div> */}



          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="lname">Last Name</label>
          <div className='labellname'> <input type="text" name="cType" value={lname} onChange={(e)=>{setLname(e.target.value)}} class="form-control" id="cType" /></div> 
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="lmobileno">Mobile Number</label>
           <div className='labelmobileno'> <input type="text" name="price" value={mobile_no} onChange={(e)=>{setMobile(e.target.value)}} class="form-control" id="price" /></div>
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="laddress">Address</label>
           <div className='labeladdress'> <textarea name="desc" className="form-control" value={address} onChange={(e)=>{setAddress(e.target.value)}} id="desc" cols="30" rows="5"></textarea></div>
          </div>

          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="lquantity">Quantity</label>
           <div className='labelquantity'> <input type="text" name="price" value={qty} onChange={(e)=>{setQty(e.target.value)}} class="form-control" id="price" /></div>
          </div>

          <div>
            Your Total Bill is {Total}
            </div>
          <div>
            <h3>Only Cash on Delivery payment is available!</h3>

          </div>

         <div className='lsubmit'> <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button></div>
        </div>
      </form>
    </div>
  )
}

export default Order