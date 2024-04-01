import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './routes/Home';
import About from './routes/Aboutus';
import Contact from './routes/Contactus';
import Learning from './routes/Learning';
import Shopping from './routes/Shopping';
import Signin from './routes/SignIn';
import Signup from './routes/Signup';
import AdminHome from './Admin_routes/Admin_Home';
import AdminContact from './Admin_routes/Admin_Contact';
import AdminMessages from './Admin_routes/Admin_Messages';
import AdminOrders from './Admin_routes/Admin_Orders';
import AdminProducts from './Admin_routes/Admin_Products';
import AdminUsers from './Admin_routes/Admin_Users';
import AdminLogout from './Admin_routes/Admin_Logout';
import AdminVideos from './Admin_routes/Admin_Videos';
import Admin_Productslist from './Admin_routes/Admin_Productlist';
import LPainting from './Learning/LPainting';
import LArt from './Learning/LArt';
import LClayart from './Learning/LClayart';
import LCrochet from './Learning/LCrochet';
import LEmbroidery from './Learning/LEmbroidery';
import LHamper from './Learning/LHamper';
import LHomeDecor from './Learning/LHomeDecor';
import LJewellery from './Learning/LJewellery';
import LMudArt from './Learning/LMudArt';
import LResin from './Learning/LResin';
import LRingPlatter from './Learning/LRingPlatter';
import LWallArt from './Learning/LWallArt';

import SArt from './Shopping/SArt'
import SClayart from './Shopping/SClayart';
import SCrochet from './Shopping/SCrochet';
import SHamper from './Shopping/SHamper';

import Admin_Product_Edit from './Admin_routes/Admin_Product_Edit';
import Order from './routes/order';
export default function App() {
  return(
    <div className='App'>
     <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/learning" element={<Learning/>}/>
      <Route path="/shopping" element={<Shopping/>}/>
      <Route path="/" element={<Signin/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/AdminHome" element={<AdminHome/>}/>
      <Route path="/AdminContact" element={<AdminContact/>}/>
      <Route path="/AdminUsers" element={<AdminUsers/>}/>
      <Route path="/AdminMessages" element={<AdminMessages/>}/>
      <Route path="/AdminOrders" element={<AdminOrders/>}/>
      <Route path="/AdminLogout" element={<AdminLogout/>}/>
      <Route path="/AdminProducts" element={<AdminProducts/>}/>
      <Route path="/AdminVideos" element={<AdminVideos/>}/>
      <Route path="/AdminVideos" element={<AdminVideos/>}/>
      <Route path="/AdminProductlist" element={<Admin_Productslist/>}/>

      /*Learning*/

      <Route path="/LPainting" element={<LPainting/>}/>
      <Route path="/LArt" element={<LArt/>}/>
      <Route path="/LClayart" element={<LClayart/>}/>
      <Route path="/LCrochet" element={<LCrochet/>}/>
      <Route path="/LEmbroidery" element={<LEmbroidery/>}/>
      <Route path="/LHamper" element={<LHamper/>}/>
      <Route path="/LHomeDecor" element={<LHomeDecor/>}/>
      <Route path="/LJewellery" element={<LJewellery/>}/>
      <Route path="/LMudArt" element={<LMudArt/>}/>
      <Route path="/LResin" element={<LResin/>}/>
      <Route path="/LRingPlatter" element={<LRingPlatter/>}/>
      <Route path="/LWallArt" element={<LWallArt/>}/>

      /*Shopping*/
      <Route path="/SArt" element={<SArt/>}/>
      <Route path="/SClayart" element={<SClayart/>}/>
      <Route path="/SCrochet" element={<SCrochet/>}/>
      <Route path="/SHamper" element={<SHamper/>}/>
      <Route path="/order" element={<Order/>}/>
      <Route path="/productedit" element={<Admin_Product_Edit/>}/>
    
     </Routes>
  
    </div>
  )
}

