import "./Homebgstyles.css";
import home_graphic from '../Assets/Home/project_home.jpg'
function Homebg() {

  return (
    <>
    <img alt="homegraphic" src={home_graphic} height={800} width={'100%'}/>
    <div style={{ 
      height: "87.5%",
  width: "100%",
  position: "absolute",
  top: 80,
  display: 'flex',
  color: 'white',
  justifyContent:'center',
  alignItems:'center',
  textAlign:'center',
  backgroundColor:'rgba(0, 0, 0, 0.2)'

  }}>
     <text style={{fontFamily:'serif',fontSize:68,position:'absolute',}}>LA'VIRA LENS CO.</text>  
    </div>

      {/* <div style={{position:'absolute',backgroundColor:'rgba(0, 0, 0, 0.2)',height:'100%',width:'100%',top:0}}/> */}
    </>
  );
}

export default Homebg;