import { Button } from "bootstrap";

import React from "react";
import { useNavigate } from "react-router-dom";

const Product_table = () => {
    const navigation=useNavigate();
    return (

        <div className="mt-5">  
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <button onClick={()=>navigation("/AdminProducts")} className="btn btn-primary"> Add data </button>
                </div>

                <table class="table">
                    <thead>
                        <tr class="table-dark">
                            <th scope="col">id</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Category Type</th>
                            <th scope="col">Price</th>
                            <th scope = "col">Image</th>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <th >1</th>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td className="d-flex justify-content-between">

                                <button className="btn btn-success"><i class="fa-solid fa-eye"></i></button>
                                <button className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>
                                <button className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                        

                    </tbody>
                </table>

            </div>
        </div>

    )

}

export default Product_table