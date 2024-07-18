import Header from "./Header";
import './Adminlogin.css';
import loginImage from "./User.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Adminlogin = () =>{
    let navigate = useNavigate();
    let [ adminname,setAdminname ] = useState("");
    let [ password,setPassword ] = useState("");
    let Adminlogin =async () =>{
        let data = await fetch(`http://127.0.0.1:4500/adminlogin`,{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({adminname,password})
        });
        data = await data.json();
        try{
            if(data[0].adminname && data[0].password){
                alert("Admin Login Successfull");
                navigate('/adminhome'); 
            }
        }catch{
            alert("Username or password not Matched");
        }
    }
    return(
        <div>
            <Header />
            <div className="adminlogin-base">
                <img src={loginImage} alt="login"/>
                <div className="adminlogin-main">
                    <input type="text" className="adminlogin-input" placeholder="Enter username"
                    onChange={(e)=>setAdminname(e.target.value)} value={ adminname } />
                    <input type="password" className="adminlogin-input" placeholder="Enter password"
                    onChange={(e)=>setPassword(e.target.value)} value={ password } />
                    <button className="adminlogin-button" onClick={ Adminlogin }>Login</button>
                </div>
            </div>
        </div>
    );
}
export default Adminlogin;