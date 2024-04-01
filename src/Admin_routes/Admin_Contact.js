import { useEffect, useState } from 'react';
import Admin_Navbar from '../Admin_components/Admin_Navbar';
//import Shape from '../Assets/Aboutus/titleabout_us.png';
//import contactgraphic from '../Assets/Aboutus/contactgraphic.webp';
//import contactshadow from '../Assets/Aboutus/contactshadow.png';
//import styles from '../styles.css';
//import caller from '../asset/Vector.png';
import"./Admincontact.css";

function AdminContact(){

    const [data, setData] = useState([])

    useEffect(() => {
      getAllContact()
    }, [])
  
  
    const getAllContact = async () => {
      console.log("Hiii")
      const res = await fetch(`http://localhost:8080/api/getAllContact`, {
        method: "GET",
        headers: {
  
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          return response.json()
        })
        .then(data => {
          console.log("Response", data.data)
          setData(data.data)
  
        })
    }
  
  

    return(
        <>
        <Admin_Navbar />

        {data.length > 0 ?
        //  data.map((e)=>
        //  console.log("Data:=",e._id)
        // Table here

        <div>
          <table className="fetch-contact">
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>PhoneNumber</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e) => (
                <tr key={e._id}>
                  <td>{e.First_Name}</td>
                  <td>{e.Last_Name}</td>
                  <td>{e.Email}</td>
                  <td>{e.Phoneno}</td>
                  <td>{e.Message}</td>
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

export default AdminContact;