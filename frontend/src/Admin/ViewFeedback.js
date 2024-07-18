//import "./ViewFeedback.css";
import AdminHeader from './AdminHeader';
import { useEffect, useState } from "react";

const ViewFeedback = () => {

    let feedback = async()=>{
    let data = await fetch(`http://127.0.0.1:4500/allfeedback`);
    data = await data.json();
    console.log(data);
}
useEffect(() => {
    feedback();
},[]);
return (
    <div>
        <AdminHeader />
        ViewFeedback
    </div>
);
}
export default ViewFeedback;