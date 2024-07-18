

import { useState, useEffect } from 'react';
import '../Users/MyBooking.css';
import AdminHeader from './AdminHeader';
import { Link } from 'react-router-dom';


const AllBooking = () => {
    let [booking, setBooking] = useState([]);
    let getbooking = async () => {
        let data = await fetch(`http://127.0.0.1:4500/allbooking`);
        data = await data.json();
        setBooking(data);
    }
    useEffect(() => {
        getbooking();
    }, []);

    let deletedata = async (id) => {
        if (window.confirm("Are you sure?")) {
            let data = await fetch(`http://127.0.0.1:4500/deletedata/${id}`, {
                method: 'delete'
            });
            data = await data.json();
            if (data.Success) {
                alert("Data Deleted Successfully");
                getbooking();
            }
        }
    }
    return (

        <div>
            <AdminHeader />
            <div className='userbooking-main'>
                
                <table>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Booking Date</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    {
                        booking.length > 0 ? booking.map((item, index) =>
                            <tr>
                                <td> {index + 1} </td>
                                <td> {item.name} </td>
                                <td> {item.email} </td>
                                <td> {item.contact} </td>
                                <td> {item.bdate} </td>
                                <td> {item.type} </td>
                                <td> {item.price} </td>
                                <td> {item.address} </td>
                                <td>
                                    <Link to={"/changestatus/" + item._id}>
                                        <button className="delete-btn">{item.status}</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => deletedata(item._id)} className="delete-btn"><Link>Delete</Link></button>
                                </td>
                            </tr>
                        ) :
                            <tr>
                                <th colSpan="12"> No Data Found </th>
                            </tr>}
                </table>
            </div>
        </div>
    );
}
export default AllBooking;

// import { useState,useEffect } from 'react';
// import '../Users/MyBooking.css';
// import AdminHeader from './AdminHeader';
// import { Link } from 'react-router-dom';


// const AllBooking =() =>{
//     let [booking,setBooking] = useState([]);
//     let getbooking =async () =>{
//             let data = await fetch(`http://127.0.0.1:4500/allbooking`);
//             data = await data.json();
//             setBooking(data);
//     }
//     useEffect(()=>{
//         getbooking();
//     },[]);

//     let deletedata = async (id)=>{
//         if(window.confirm("Are you sure?")){
//             let data = await fetch(`http://127.0.0.1:4500/deletedata/${id}`,{
//                 method:'delete'
//             });
//             data = await data.json();
//             if (data.Success){
//                 alert("Data Deleted Successfully");
//                 getbooking();
//             }
//         }
//     }
//     return(

//         <div>
//         <AdminHeader />
//         <div className='userbooking-main'>
//         <div align='center'>All Booking</div>
//             <table className='userbooking-table'>
//                 <tr>
//                     <th>S.No</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Contact</th>
//                     <th>Booking Date</th>
//                     <th>Type</th>
//                     <th>Price</th>
//                     <th>Address</th>
//                     <th>Status</th>
//                     <th>Action</th>
//                 </tr>
//                 {
//                     booking.length>0 ? booking.map((item,index)=>
//                     <tr>
//                         <td> { index+1 } </td>
//                         <td> { item.name } </td>
//                         <td> {item.email} </td>
//                         <td> {item.contact} </td>
//                         <td> {item.bdate} </td>
//                         <td> {item.type} </td>
//                         <td> {item.price} </td>
//                         <td> {item.address} </td>
//                         <td>
//                             <Link to={"/changestatus/" + item._id}>
//                             <button className='delete-btn'>{item.status}</button>
//                             </Link>
//                             </td>
//                             <td>
//                                 <button className="delete-btn" onClick={()=>deletedata(item._id) }><Link>Delete</Link></button>
//                             </td>
//                     </tr>
//                     ):
//                     <tr>
//                         <th colSpan="12"> No Data Found </th>
//                     </tr>
//                 }
//             </table>
//         </div>
//         </div>
//     );
// }

// export default AllBooking;
