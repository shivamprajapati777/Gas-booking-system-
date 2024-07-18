import "./AdminHeader.css";
import { Link } from 'react-router-dom';
const AdminHeader =()=>{
    return(
        <div className="adminheader-base">
            <div className="adminheader-main">
                
                <ul>
               
                    <li><Link to="/adminhome">Home</Link></li>
                    <li><Link to="/allbooking">Bookings</Link></li>
                    <li><Link>Users</Link></li>
                    <li><Link>feedback</Link></li>

                    <li><Link to="/">Admin login</Link></li>
                </ul>

            </div>
           
        </div>
    );
}
export default AdminHeader;