import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Adminproduct.css';

const Admin_Products = () => {
  const navigation = useNavigate();
  const [ptype, setPtype] = useState('');
  const [inpval, setINP] = useState({
    pname: '',
    desc: '',
    cType: '',
    price: '',
  });

  const setdata = (e) => {
    const { name, value } = e.target;
    setINP((prevState) => ({
      ...prevState,
      [name]: name === 'image' ? e : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { pname, desc, price } = inpval;

    if (pname !== '' || desc !== '' || ptype !== '' || price !== '') {
      const reqparams = {
        pname: pname,
        desc: desc,
        cType: ptype,
        price: price,
      };

      const data = await fetch('http://localhost:8080/api/addarticle', {
        method: 'POST',
        body: reqparams,
      });

      const res = await data.json();

      if (res.status === 200) {
        alert('Product added');
        navigation('/AdminProductlist');
      } else {
        alert('Something went wrong');
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="container">
      <div className="addproduct">
        <h1>Add Product</h1>
        <br />
      </div>
      <form className="admin-product-form" method="POST" encType="multipart/form-data">
          <div className="input-group">
            <label className="input-label">Product Name</label>
            <input
              type="text"
              name="pname"
              value={inpval.pname}
              onChange={setdata}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label className="input-label">Product Type</label>
            <select
              value={ptype}
              onChange={(e) => setPtype(e.target.value)}
              className="input-field"
            >
              <option>Select</option>
              <option>Art&craft</option>
              {/* Add other options */}
            </select>
          </div>

          <div className="input-group">
            <label className="input-label">Price</label>
            <input
              type="text"
              name="price"
              value={inpval.price}
              onChange={setdata}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label className="input-label">Description</label>
            <textarea
              name="desc"
              className="input-field"
              value={inpval.desc}
              onChange={setdata}
              rows="5"
            ></textarea>
          </div>

          <div className="psubmit">
            <button type="submit" className="btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        
      </form>
    </div>
  );
};

export default Admin_Products;
