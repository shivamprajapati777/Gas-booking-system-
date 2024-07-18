import './BookNow.css';
import UserHeader from './UserHeader';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const BookNow = () => {
    let navigate = useNavigate();
    let d = new Date();
    let dt = d.getDate();
    let m = d.getMonth() + 1;
    let y = d.getFullYear();
    dt = dt + '-' + m + '-' + y;
    let [name, setName] = useState("");
    let [contact, setContact] = useState("");
    let [bdate, setBdate] = useState("");
    let [price, setPrice] = useState(1100);
    let [type, setType] = useState("Home Type");
    let [address, setAddress] = useState("");
    let [city, setCity] = useState("");
    let[email,setEmail]= useState("");
    useEffect(() => {
        setBdate(dt);
    }, []);

    let setprice = () => {
        if (type === "Home Type") {
            setPrice(1100);
        } else {
            setPrice(1600);
        }

    }
    let status = "Pending";
    useEffect(()=>{
    let d1 = JSON.parse(localStorage.getItem('user'));
    setEmail(d1[0].email);
    },[]);

    let bookgas = async () => {

        let data = await fetch(`http://127.0.0.1:4500/booknow`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, contact, bdate, type, price, address, city,email, status })
        });
        data = await data.json();
        if (data.name) {
            alert("Booking Requset Has send Successfully");
            navigate('/mybooking');
        }
    }

    return (
        <div>
            <UserHeader />
            <div className='book-base'>
                <div className='book-main'>
                    <div className='book-heading'>Order Book Now</div>
                    <input type='text' placeholder='Full Name'
                        onChange={(e) => setName(e.target.value)} value={name} />

                    <input type='number' placeholder='Enter Contact Number'
                        onChange={(e) => setContact(e.target.value)} value={contact} />

                    <input type='text' placeholder='Booking date'
                        onChange={(e) => setBdate(e.target.value)} value={bdate} readOnly />

                    <select onChange={(e) => setType(e.target.value)} value={type} onClick={setprice}>
                        <option value="Home Type">Home Type</option>
                        <option value="Commercial Gas">Commercial Gas</option>
                    </select>
                    <input type='text' placeholder='Total Price'
                        onChange={(e) => setPrice(e.target.value)} value={price} readOnly />

                    <input type='text' placeholder='Shipping Addres'
                        onChange={(e) => setAddress(e.target.value)} value={address} />

                    <input type='text' placeholder='City'
                        onChange={(e) => setCity(e.target.value)} value={city} />
                    <button onClick={bookgas}>Book Now</button>
                </div>
            </div>
        </div>
    );
}

export default BookNow;