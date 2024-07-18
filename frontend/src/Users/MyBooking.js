

import { useState,useEffect } from 'react';
import './MyBooking.css';
import UserHeader from './UserHeader';

const MyBooking =() =>{
    let [booking,setBooking] = useState([]);
    let getbooking =async () =>{
            let d1 = JSON.parse(localStorage.getItem('user'));
            let email = d1[0].email;
            let data = await fetch(`http://127.0.0.1:4500/userbooking/${email}`);
            data = await data.json();
            setBooking(data);
    }
    useEffect(()=>{
        getbooking();
    },[]);
    return(

        <div>
        <UserHeader />
        <div className='userbooking-main'>
            <div align="center">Mu Booking</div>
            <table className='userbooking-table'>
                <tr>
                    <th>S No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Booking Date</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Address</th>
                    <th>Status</th>
                </tr>
                {
                    booking.length>0 ? booking.map((item,index)=>
                    <tr>
                        <td> { index+1 } </td>
                        <td> { item.name } </td>
                        <td> {item.email} </td>
                        <td> {item.contact} </td>
                        <td> {item.bdate} </td>
                        <td> {item.type} </td>
                        <td> {item.price} </td>
                        <td> {item.address} </td>
                        <td> {item.status} </td>
                    </tr>
                    ):
                    <tr>
                        <th colSpan="12"> No Data Found </th>
                    </tr>
                }
            </table>
        </div>
        </div>
    );
}

export default MyBooking;