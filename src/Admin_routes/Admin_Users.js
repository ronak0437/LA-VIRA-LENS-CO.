import { HideImageOutlined } from '@mui/icons-material';
import Admin_Navbar from '../Admin_components/Admin_Navbar';
import { Table } from '@mui/material';
import TableBody from '@mui/material';
import TableHead from '@mui/material';
import TableRow from '@mui/material';
import TableCell from '@mui/material';
import"./Adminusers.css";
import { useEffect, useState } from 'react';
function AdminUsers() {

  const [data, setData] = useState([])

  useEffect(() => {
    getAllUser()
  }, [])


  const getAllUser = async () => {
    console.log("Hiii")
    const res = await fetch(`http://localhost:8080/api/getAllUser`, {
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
                <th>Id</th>
                <th>Email</th>
                <th>Password</th>
                <th>Confirm Password</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e) => (
                <tr key={e._id}>
                  <td>{e._id}</td>
                  <td>{e.email}</td>
                  <td>{e.password}</td>
                  <td>{e.confirm_password}</td>
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
export default AdminUsers;