import { useEffect, useState } from 'react';
import Admin_Navbar from '../Admin_components/Admin_Navbar';
import { useNavigate } from 'react-router-dom';
import { button } from 'bootstrap';
import"./Adminlist.css";
function Admin_Productslist(){

    const [data, setData] = useState([]);
    const [refresh,setRefresh]=useState(false);
    const navigation =useNavigate()
    useEffect(() => {
      if(!refresh)
      {
        getAllContact()
      }
      
    }, [refresh])
  
  
    const getAllContact = async () => {
      console.log("Hiii")
      setRefresh(true)
      const res = await fetch(`http://localhost:8080/api/getAllArticle`, {
        method: "GET",
        headers: {
  
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          setRefresh(false)
          return response.json()
        })
        .then(data => {
          setRefresh(false)
          console.log("Response of Product:=", data.data)
          setData(data.data)
  
        })
    }


    function Edit(item){
      console.log("Item for Edit:==",item)
      navigation("/productedit",{state:{item:item}})
    }

    function Delete(id){
      console.log("ID for delete:==",id)
      setRefresh(true)
      fetch('http://localhost:8080/api/deleteProduct/'+id, 
      { method: 'DELETE' })
      .then(async response => {
        setRefresh(false)
          const data = await response.json();
          // check for error response
          if (response.status == 200) {

            alert('Delete successful');
          }

       
      })
      .catch(error => {
        setRefresh(false)
             console.error('There was an error!', error);
      });


    }




    return(
        <>
        <Admin_Navbar/>
        <div className="add_btn mt-2 mb-2">
                    <button onClick={()=>navigation("/AdminProducts")} className="btn btn-primary"> Add data </button>
                </div>
        
        {data.length > 0 ?
        //  data.map((e)=>
        //  console.log("Data:=",e._id)
        // Table here

        
        <div>
             
          <table className="fetch-productlist">
            <thead>
              <tr>
                <th>ProductName</th>
                <th>ProductType</th>
                <th>Description</th>
                <th>Price</th>
                <th></th>
               
              </tr>
            </thead>
            <tbody>
              {data.map((e) => (
                <tr key={e._id}>
                  <td>{e.pname}</td>
                  <td>{e.cType}</td>
                  <td>{e.desc}</td>
                  <td>{e.price}</td>
                  <tr> <td><button onClick={()=>Edit(e)}   type="button" class="btn btn-primary" style={{backgroundColor:'pink'}}>Edit</button> </td> 
                 <td><button onClick={()=>Delete(e._id)} type="button" class="btn btn-primary" style={{backgroundColor:'pink'}}>Delete</button> </td> 
                  </tr>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        :
        null
      }


        </>
    )
}

export default Admin_Productslist;