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
//import creative from '../asset/Rectangle 33.png';
//import craft from '../asset/Rectangle 34.png';
//import paint from '../asset/Rectangle 35.png';


function vPainting(){
    return(
        <>
        
        <div className='container'>
       <div  className='image-header'>
        <img alt="logoimg" src={Shape}width="1300" height="50"  />
        <h1 className='image-text'>LEARNING Video</h1>
        </div>
        </div>
        <div className='learning md:grid-cols-2'>
        <div  >
        <a href="https://youtube.com/shorts/K-SawZMtefc?feature=share" target="_blank" rel="noreferrer">
        <img alt="logoimg" className='img' src={Clayart}width="450" height="400"  />
        <h1 className='text'>Clayart</h1>
        </a>
        </div>
        <div>
             <a href="https://youtube.com/shorts/K-SawZMtefc?feature=share" target="_blank" rel="noreferrer">
      
        <img alt="logoimg" className='img'src={crochet}width="450" height="400"  />
        <h1 className='text '>Crochet</h1>
        </a>
        </div>  
        </div>
        <div className='learning md:grid-cols-2'>
        <div  >
             <a href="https://youtube.com/shorts/K-SawZMtefc?feature=share" target="_blank" rel="noreferrer">
      
        <img alt="logoimg" className='img' src={homedecor}width="450" height="400"  />
        <h1 className='text'>Home Decor</h1>
        </a>
        </div>
        <div>
             <a href="https://youtube.com/shorts/K-SawZMtefc?feature=share" target="_blank" rel="noreferrer">
      
        <img alt="logoimg" className='img'src={Jewellery}width="450" height="400"  />
        <h1 className='text '>Jewellery</h1>
        </a>
        </div>
        </div>
        <div className='learning md:grid-cols-2'>
        <div>
             <a href="https://youtube.com/shorts/K-SawZMtefc?feature=share" target="_blank" rel="noreferrer">
      
        <img alt="logoimg" className='img'src={ringplatter}width="450" height="400"  />
        <h1 className='text '>Ring Platter</h1>
        </a>
        </div>
        <div>
             <a href="https://youtube.com/shorts/K-SawZMtefc?feature=share" target="_blank" rel="noreferrer">
      
        <img alt="logoimg" className='img'src={wallart}width="450" height="400"/>
        <h1 className='text '>Wall Art</h1>
       </a>
        </div>
        </div>        
     
       
        </>
    )
}

export default vPainting;