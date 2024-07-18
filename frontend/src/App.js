import Home from "./Common/Home";
import {Route,Routes} from "react-router-dom";
import Adminlogin from "./Common/Adminlogin";
import AdminHome from "./Admin/AdminHome";
import Signup from "./Common/Signup";
import Userlogin from "./Common/Userlogin";
import UserHome from "./Users/UserHome";
import BookNow from "./Users/BookNow";
import MyBooking from "./Users/MyBooking";
import AllBooking from "./Admin/AllBooking";
import ChangeStatus from "./Admin/ChangeStatus";
import Feedback from "./Users/Feedback";
import ViewFeedback from "./Admin/ViewFeedback";
const App=()=>{
  return(
    <div>
    <Routes>
     <Route path="" element={<Home />} />
     <Route path="/adminhome" element={<AdminHome />} />
     <Route path="adminlogin" element={<Adminlogin />} />
     <Route path="signup" element={<Signup />} />
     <Route path="userlogin" element={<Userlogin />} />
     <Route path='userhome' element={ <UserHome />} />
     <Route path="booknow" element={<BookNow />} />
     <Route path="mybooking" element={<MyBooking />} />
     <Route path="allbooking" element={ <AllBooking />} />
     <Route path="/changestatus/:id" element={<ChangeStatus />} />
     <Route path="/feedback" element={<Feedback />} />
     <Route path="/viewfeedback" element={<ViewFeedback />} />



     </Routes>
    </div>
  );
}
export default App;
