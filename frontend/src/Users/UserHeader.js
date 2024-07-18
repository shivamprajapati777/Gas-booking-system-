import "./UserHeader.css";
import {Link} from "react-router-dom";
const UserHeader =()=>{
    function logout(){
        localStorage.clear();
    }
    return(
        <div className="Userheader-base">
            <div className="Userheader-main">
                
                <ul>
               
                    <li><Link to="/Userhome">Home</Link></li>
                    <li><Link to="/booknow">Book Now</Link></li>
                    <li><Link to="/mybooking">My Bookings</Link></li>
                    <li><Link to="/feedback">feedback</Link></li>
                    <li><Link to="/" onClick={logout}>Logout</Link></li>


                    
                </ul>

            </div>
           
        </div>
    );
}
export default UserHeader;