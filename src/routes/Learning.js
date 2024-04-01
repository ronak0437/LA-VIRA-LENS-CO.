import Navbar from '../components/Navbar';
import Shape from '../Assets/Aboutus/titleabout_us.png';
import Painting from '../Assets/Category/Painting.jfif';
import art from '../Assets/Category/art.jpg';
import Clayart from '../Assets/Category/clayart.jpg';
import crochet from '../Assets/Category/crochet.png';
import embrodery from '../Assets/Category/embrodery.jpg';
import hamper from '../Assets/Category/hamper.jpg';
import homedecor from '../Assets/Category/homedecor.webp';
import Jewellery from '../Assets/Category/Jewellery.jpg';
import mud from '../Assets/Category/mud.jpg';
import resin from '../Assets/Category/resin.jpg';
import ringplatter from '../Assets/Category/ringplatter.webp';
import wallart from '../Assets/Category/wallart.jpg';
import { Link } from "react-router-dom";
//import creative from '../asset/Rectangle 33.png';
//import craft from '../asset/Rectangle 34.png';
//import paint from '../asset/Rectangle 35.png';


function Learning(){
    return(
        <>
        <Navbar />
        <div className='container'>
       <div  className='image-header'>
        <img alt="logoimg" src={Shape}width="1300" height="50"  />
        <h1 className='image-text'>LEARNING CATEGORY ARE HERE FOR YOU</h1>
        </div>
        </div>
        <div className='learning md:grid-cols-4'>
        <div  >
        <Link to='../LPainting'><img alt="logoimg" className='img'src={Painting}width="250" height="300"  /></Link>
        <h1 className='text'>Painting</h1>
        </div>
        <div>
        <Link to='../LArt'><img alt="logoimg "className='img' src={art}width="250" height="300"  /></Link>
        <h1 className='text '>Art</h1>
        </div>
        <div  >
        <Link to='../LClayart'><img alt="logoimg" className='img' src={Clayart}width="250" height="300"  /></Link>
        <h1 className='text'>Clayart</h1>
        </div>
        <div>
        <Link to='../LCrochet'><img alt="logoimg" className='img'src={crochet}width="250" height="300"  /></Link>
        <h1 className='text '>Crochet</h1>
        </div>  
        </div>
        <div className='learning md:grid-cols-4'>
        <div  >
        <Link to='../LEmbroidery'><img alt="logoimg" className='img'src={embrodery}width="250" height="300"  /></Link>
        <h1 className='text'>Embroidery</h1>
        </div>
        <div>
        <Link to='../LHamper'><img alt="logoimg "className='img' src={hamper}width="250" height="300"  /></Link>
        <h1 className='text '>Hamper</h1>
        </div>
        <div  >
        <Link to='../LHomeDecor'> <img alt="logoimg" className='img' src={homedecor}width="250" height="300"  /></Link>
        <h1 className='text'>Home Decor</h1>
        </div>
        <div>
        <Link to='../LJewellery'><img alt="logoimg" className='img'src={Jewellery}width="250" height="300"  /></Link>
        <h1 className='text '>Jewellery</h1>
        </div>
        </div>
        <div className='learning md:grid-cols-4'>
        <div>
        <Link to='../LMudArt'><img alt="logoimg" className='img'src={mud}width="250" height="300"  /></Link>
        <h1 className='text '>Mud Art</h1>
        </div>
        <div>
        <Link to='../LResin'><img alt="logoimg" className='img'src={resin}width="250" height="300"  /></Link>
        <h1 className='text '>Resin Art</h1>
        </div>
        <div>
        <Link to='../LRingPlatter'><img alt="logoimg" className='img'src={ringplatter}width="250" height="300"  /></Link>
        <h1 className='text '>Ring Platter</h1>
        </div>
        <div>
        <Link to='../LWallArt'><img alt="logoimg" className='img'src={wallart}width="250" height="300"  /></Link>
        <h1 className='text '>Wall Art</h1>
        </div>
        </div>        
       
        </>
    )
}

export default Learning;