import React, { useEffect, useState } from 'react'
import { NavLink, json, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './updateproduct.css';

const Admin_Product_Edit = () => {
    const location = useLocation();
    // const id=location.state.item;
    const id = location.state.item._id
    console.log("ID IN EDIT:", id)
    const navigation = useNavigate();
    const [ptype, setPtype] = useState(location.state.item.cType);
    const [pname, setPname] = useState(location.state.item.pname);
    const [desc, setDesc] = useState(location.state.item.desc);
    const [price, setPrice] = useState(location.state.item.price);




    const handleSubmit = async (e) => {
        e.preventDefault();

       let item= {pname,ptype,price,desc,id}

        if (pname !== "" || desc !== "" || ptype !== "" || price !== "") {
            const data = await fetch('http://localhost:8080/api/editProduct/' + id, {
                method: 'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(item)
            });

            const res = await data.json();
            console.log(res)
            if (res.status === 200) {
                alert('Product Updated Successfully');
                navigation("/AdminProductlist")

            } else {
                alert('Something went wrong');
            }

        }
        else {
            alert("Hellllllllllllllooooooooooooooo")
        }




    }





    return (
        <div className="container">
           <div className='updateproduct'>  <h1>Update Product</h1></div>
            <form className="mt-4" method="POST" enctype="multipart/form-data">
                <div >

                    <div class="mb-3 col-lg-6 col-md-6 col-12">

                        <label for="exampleInputEmail1" class="pname">Product Name</label>
                     <div className='labelpname'> <input type="text" name="pname" value={pname} onChange={(e) => setPname(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></div>  

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
                        <label for="exampleInputPassword1" className="ptype">Product Type</label>
                        {/* <input type="text" name="cType" value={inpval.cType} onChange={setdata} class="form-control" id="cType" /> */}

                        <div className='labelptype' > <select value={ptype} onChange={e => setPtype(e.target.value)} >
                            <option>LENS</option>
                        </select>

                            </div>


                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className='pprice'>Price</label>
                        <div className='labelpprice'> <input type="text" name="price" value={price} onChange={(e) => {setPrice(e.target.value)}} class="form-control" id="price"/></div>
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="pdescription">Description</label>
                        <div className='labelpdescription'> <textarea name="desc" className="form-control" value={desc} onChange={(text)=>{setDesc(text.target.value)}} id="desc" cols="30" rows="5"></textarea></div>
                    </div>

                    <div className="psubmit"> <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button></div>
                </div>
            </form>
        </div>
    )
}

export default Admin_Product_Edit