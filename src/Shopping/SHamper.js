import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Card } from 'react-bootstrap';
import homedecor from '../Assets/Category/frame4.webp';
import { Margin } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Hamper() {

    const [data, setData] = useState([])

    const navigation =useNavigate()
    useEffect(() => {
        getAllContact()
    }, [])


    const getAllContact = async () => {
        console.log("Hiii")
        const res = await fetch(`http://localhost:8080/api/getAllArticle`, {
            method: "GET",
            headers: {

                "Content-Type": "application/json"
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {

                setData(data.data)

            })
    }

    function shopnow(item){
      console.log("ID:==")
  
     navigation("/order",{state:{item:item}})
  
  }
  

    return (

        <>
            <Navbar />
            <div className='learning md:grid-cols-2' >
                {
                    data.map((e) => {

                        if (e.cType == "Frame 4") {
                            return (
                                <div className='learning md:grid-cols-2'  >
                                    <Card  style={{display:'flex',width:955,height:300,marginTop:50}}>
                                                                               <Card.Img variant="top" src={homedecor} width="250" height="300" />
                                        <Card.Body style={{ maxWidth:'100%',marginTop:50,borderRadius:20,padding:10 ,backgroundColor:'pink',height:150,width:955}}>
                                            <Card.Title>{e.pname}</Card.Title>
                                            <div>
                                            <span style={{ paddingRight: '40px' }}>{e.cType}</span>
                                                 {'\u20B9'} {e.price}
                                            </div>

                                            <Card.Text style={{maxWidth:'80%',marginLeft:'30px'}}>
                                                {e.desc}
                                            </Card.Text>
                                            <div className="add_btn mt-2 mb-2">
                                           <button onClick={()=>shopnow(e)} style={{backgroundColor:'black',color:'white'}}> Shop now </button>
                                        </div>

                                        </Card.Body>
                                        
                                        
                                    </Card>
                                </div>
                            )

                        }


                    })
                }



            </div>


        </>
    )
}

export default Hamper;
