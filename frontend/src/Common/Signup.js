import "./Signup.css";
import Header from "../Common/Header";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Signup=()=>{
  let [name,setName]=useState("");
  let [email,setEmail]=useState("");
  let [password,setPassword]=useState("");
  let [contact,setContact]=useState("");
  let [aadhar,setAadhar]=useState("");
  let [city,setCity]=useState("");


  let navigate=useNavigate();
  let registration=async()=>{
    console.log(name,email,password,contact,city,aadhar);
    let data =await fetch(`http://127.0.0.1:4500/registration`,{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({name,email,password,contact,city,aadhar})
    });
    data = await data.json();
    if(data.Status){
      alert("Registration Succesfully");
      navigate('/');
    }
  }
    return(
        <div>
            <Header />
           <div className="signup-base">
            
          
            <div className="signup-main">
                            
                <div className="signup-heading">
                    <h1>Register Yourself</h1>
                </div>
      
                <input type="text" placeholder="Enter your Fullname" required 
                onChange={(e)=>setName(e.target.value)} value={ name } />
                <input type="email" placeholder="Enter your Email" 
                onChange={(e)=>setEmail(e.target.value)} value={ email } />
                <input type="number" placeholder="Enter your contact number" required
                onChange={(e)=>setContact(e.target.value)} value={ contact }  />
                <input type="number" placeholder="Enter your aadhar" 
                onChange={(e)=>setAadhar(e.target.value)} value={ aadhar } />
                <input type="password" placeholder="Enter your password"
                onChange={(e)=>setPassword(e.target.value)} value={ password } />
                <input type="text" placeholder="Enter your city" required 
                 onChange={(e)=>setCity(e.target.value)} value={ city} />
                
                <button className="bt" onClick={ registration }>Register</button>
                <button className="bt">Cancel</button>

            </div>
            
           </div>
        </div>

    );
}
export default Signup;