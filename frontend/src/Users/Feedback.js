import './Feedback.css';
import UserHeader from './UserHeader';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Feedback = () => {
    let navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('user'))[0];
    let [name, setName] = useState(user.name);
    let [email, setEmail] = useState(user.email);
    let [contact, setContact] = useState(user.contact);
    let [feedback, setFeedback] = useState("");

    let submitfeedback = async () => {
        let data = await fetch(`http://127.0.0.1:4500/feedback`,{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name,email,contact,feedback})
        });
        data  = await data.json();
        if (data.Saved){
            alert("Feedback Submitted Successfully");
            navigate('/userhome');
        }else{
            alert("Something went wrong");
        }
    }

    return (
        <div>
            <UserHeader />
            <div className='feedback-base'>
                <div className='feedback-main'>
                    <input type='text' className='feedback-input' placeholder='Enter Your Full Name' 
                    onChange={(e)=>setName(e.target.value)} value={name} readOnly />
                    <input type='email' className='feedback-input' placeholder='Enter Your Email'
                     onChange={(e)=>setEmail(e.target.value)} value={email} readOnly />
                    <input type='number' className='feedback-input' placeholder='Enter Your Number'
                     onChange={(e)=>setContact(e.target.value)} value={contact}  readOnly/>
                    <input type='text' className='feedback-input' placeholder='Write Your Valuable Feedback'
                     onChange={(e)=>setFeedback(e.target.value)} value={feedback} />
                    <button className='feedback-button' onClick={ submitfeedback }>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
