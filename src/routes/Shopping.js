import Navbar from '../components/Navbar';
import Shape from '../Assets/Aboutus/cardimage.jpg';
import art from '../Assets/Category/frame1.webp';
import Clayart from '../Assets/Category/frame2.webp';
import crochet from '../Assets/Category/frame3.jpg';
import hamper from '../Assets/Category/frame4.webp';

import { Link } from "react-router-dom";



function Shopping(){
    return(
        <>
        <Navbar />
        <div className='container'>
       <div  className='image-header'>
        <img alt="logoimg" src={Shape}width="1300" height="50"  />
        <h1 className='image-text' style={{color:'white'}}>Welcome To the Lens Family!</h1>
        </div>
        </div>
        <div className='learning' style={{backgroundColor:'black',alignItems:'center',justifyContent:'center',marginLeft:100}}>
       
        <div>
        <Link to='../SArt'><img alt="logoimg "className='img' src={art}width="200" height="200"  /></Link>
        <h1 className='text ' style={{color:'white'}}>FRAME 1 </h1>
        </div>
        <div  >
        <Link to='../SClayart'><img alt="logoimg" className='img' src={Clayart}width="200" height="200"  /></Link>
        <h1 className='text' style={{color:'white'}}>FRAME 2</h1>
        </div>
       
        </div>
         <div className='learning' style={{backgroundColor:'black',alignItems:'center',justifyContent:'center',marginLeft:100}}>
        <div>
        <Link to='../SCrochet'><img alt="logoimg" className='img'src={crochet}width="200" height="200"  /></Link>
        <h1 className='text ' style={{color:'white'}}>FRAME 3</h1>
        </div>  
        <div>
        <Link to='../SHamper'><img alt="logoimg "className='img' src={hamper}width="200" height="200"  /></Link>
        <h1 className='text ' style={{color:'white'}}>FRAME 4</h1>
        </div>
        

        </div> 
           
       
        </>
    )
}

export default Shopping;