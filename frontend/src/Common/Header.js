import "./Header.css"
import { Link } from "react-router-dom";
const Header = () => {
    return (
  
 






        <div>
            <nav>
                <div className="header-img">

                    <img src="https://t3.ftcdn.net/jpg/00/25/68/62/240_F_25686219_Q84glZZpVizMaovZf2R1GZiQmycMTZtk.jpg" alt="gas booking" />

                </div>
                <div className="header-list">
                <ul>

                    <li><Link to="/">Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link to="/userlogin">User login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>

                    <li><Link to="/adminlogin">Admin login</Link></li>
                </ul>
                </div>



            </nav>

       </div>




    );
}
export default Header;