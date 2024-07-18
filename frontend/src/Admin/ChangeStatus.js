// import "./ChangeStatus.css";
// import React from 'react';
// import AdminHeader from "./AdminHeader";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const ChangeStatus = () => {
//     let params = useParams();
//     let [data, setData] = useState([]);
//     let userdata = async () => {
//         let user = await fetch(`http://127.0.0.1:4500/changestatus/${params.id}`);
//         user = await user.json();
//         setData(user);
//     }
//     useEffect(() => {
//         userdata();
//     });
    
//     return (
//         <div>
//             <AdminHeader />
//             <div className="change-base">
//                 <div className="change-main">
//                     <table>
//                         <tr>
//                             <th>Name</th>
//                             <td>:{data.name}</td>
//                         </tr>
//                         <tr>
//                             <th>Booking Date</th>
//                             <td>:{data.contact}</td>
//                         </tr>
//                         <tr>
//                             <th>Price</th>
//                             <td>:{data.price}</td>
//                         </tr>
//                         <tr>
//                             <th>Address</th>
//                             <td>:{data.address} { data.city}</td>
//                         </tr>
//                         <tr>
//                             <th>Email</th>
//                             <td>:{data.email}</td>
//                         </tr>
//                         <tr>
//                             <th>Status</th>
//                             <td>:

                               
                               
                                
//                                 </td>
//                         </tr>
//                         <tr>
//                             <th colSpan="3">
//                                 <button>Update</button>
//                             </th>
//                         </tr>
//                     </table>

//                 </div>

//             </div>
//         </div>
//     )
// }

// export default ChangeStatus;
import './ChangeStatus.css';
import AdminHeader from './AdminHeader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


let ChangeStatus = () => {
    let navigate = useNavigate();
    let params = useParams();
    let [data, setData] = useState([]);
    let [status, setStatus] = useState(data.status);


    let userdata = async () => {
        let user = await fetch(`http://127.0.0.1:4500/changestatus/${params.id}`);
        user = await user.json();
        setData(user);
    }
    useEffect(() => {
        userdata();
    }, []);

    let updatedata = async () => {
        let data1 = await fetch(`http://127.0.0.1:4500/updatestatus/${data._id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({status})
        });
        data1 = await data1.json();
        if (data1.Success) {
            alert("Status Changed Successfully!");
            navigate('/allbooking');
        } else {
            alert("Something went wrong!!!");
        }
    }


    return (
        <div>
            <AdminHeader />
            <div className='change-base'>
                <div className='change-main'>
                    <table border="1px solid black">
                        <tr>
                            <th>Name</th>
                            <td>: {data.name} </td>
                        </tr>
                        <tr>
                            <th>Contact</th>
                            <td>: {data.contact} </td>
                        </tr>
                        <tr>
                            <th>Booking Date</th>
                            <td>: {data.bdate} </td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <td>: {data.price} </td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>: {data.address} {data.city}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>: {data.email} </td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>:
                                {data.status == "Pending" &&
                                    <select onChange={(e) => setStatus(e.target.value)} vlaue={status}>
                                        <option selected value="Pending">Pending</option>
                                        <option value="Confirm">Confirm</option>
                                        <option value="Cancel">Cancel</option>
                                    </select>
                                }
                                {data.status == "Confirm" &&
                                    <select onChange={(e) => setStatus(e.target.value)} vlaue={status}>
                                        <option value="Pending">Pending</option>
                                        <option selected value="Confirm">Confirm</option>
                                        <option value="Cancel">Cancel</option>
                                    </select>
                                }
                                {data.status == "Cancel" &&
                                    <select onChange={(e) => setStatus(e.target.value)} vlaue={status}>
                                        <option value="Pending">Pending</option>
                                        <option value="Confirm">Confirm</option>
                                        <option selected value="Cancel">Cancel</option>
                                    </select>
                                }
                            </td>
                        </tr>
                    </table>
                    <button className='change-button' onClick={updatedata}>Update Status</button>
                </div>
            </div>
        </div>
    );
}

export default ChangeStatus;