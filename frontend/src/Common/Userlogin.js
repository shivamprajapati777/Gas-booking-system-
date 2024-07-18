import Header from "./Header";
import './Adminlogin.css';
import { useState } from "react";
import UserLogin from "./User.jpg";
import { useNavigate } from "react-router-dom";

const Userlogin = () =>{
    let navigate = useNavigate();
    let [ email,setEmail ] = useState("");
    let [ password,setPassword ] = useState("");
    let Userlogin =async () =>{
        let data = await fetch(`http://127.0.0.1:4500/userlogin`,{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({email,password})
        });
        data = await data.json();
        try{
            if(data[0].email && data[0].password){
                alert("Admin Login Successfull");
                localStorage.setItem('user',JSON.stringify(data));
                navigate('/userhome');
            }
        }catch{
            alert("Username or password not Matched");
        }
    }
    return(
        <div>
            <Header />
            <div className="adminlogin-base">
                <img src={UserLogin} alt="User"/>
                <div className="adminlogin-main">
                    <input type="text" className="adminlogin-input" placeholder="Enter Email"
                    onChange={(e)=>setEmail(e.target.value)} value={ email } />
                    <input type="password" className="adminlogin-input" placeholder="Enter password"
                    onChange={(e)=>setPassword(e.target.value)} value={ password } />
                    <button className="adminlogin-button" onClick={ Userlogin}>Login</button>
                </div>
            </div>
        </div>
    );
}
export default Userlogin;