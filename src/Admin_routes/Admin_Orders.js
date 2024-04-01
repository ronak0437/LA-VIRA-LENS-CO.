import { HideImageOutlined } from '@mui/icons-material';
import Admin_Navbar from '../Admin_components/Admin_Navbar';
import { Table } from '@mui/material';
import TableBody from '@mui/material';
import TableHead from '@mui/material';
import TableRow from '@mui/material';
import TableCell from '@mui/material';
import"./Adminusers.css";
import { useEffect, useState } from 'react';
function AdminOrders() {

  const [data, setData] = useState([])

  useEffect(() => {
    getAllUser()
  }, [])


  const getAllUser = async () => {
    console.log("Hiii")
    const res = await fetch(`http://localhost:8080/api/getAllOrder`, {
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







  return (
    <>
      <Admin_Navbar />

      {data.length > 0 ?
        //  data.map((e)=>
        //  console.log("Data:=",e._id)
        // Table here

        <div>
          <table className="fetch-table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Mobile number</th>
                <th>Address</th>
                <th>Product Name</th>
                <th>Product Type</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                
              </tr>
            </thead>
            <tbody>
              {data.map((e) => (
                <tr key={e._id}>
                  <td>{e.fname}{e.lname}</td>
                  <td>{e.mobile_no}</td>
                  <td>{e.address}</td>
                  <td>{e.pname}</td>
                  <td>{e.ptype}</td>
                  <td>{e.qty}</td>
                  <td>{e.pprice}</td>
                  <td>{e.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        :
        null
      }


      { /*  <Table>
  <TableHead>
    <TableRow>
      <TableCell>Column 1</TableCell>
      <TableCell>Column 2</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {data.map((row) => (
      <TableRow key={row.id}>
        <TableCell>{row.column1}</TableCell>
        <TableCell>{row.column2}</TableCell>
      </TableRow>
    ))}
  </TableBody>
    </Table>*/}
    </>

  )
}
export default AdminOrders;