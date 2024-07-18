import Header from "./Header";
import "./Home.css";
import myImage from "./gas1.jpeg";
const Home=()=>{
    return(
        <div>
            <Header />
            <div className="home-base">
                <div className="home-main">
                    <img src={myImage} alt="gas" />
                      
                    
                </div>
               
            </div>
           
            
        </div>
    );

}
export default Home;