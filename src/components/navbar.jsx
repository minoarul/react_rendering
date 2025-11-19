
import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
        <>
         <div>
            <div>
                logo
            </div>
            <div>
                <Link classname="linklist" to="/">Home</Link>
                <Link classname="linklist" to="/About">About</Link>
                <Link classname="linklist" to="/Product">Product</Link>
                <Link classname="linklist" to="/Service">Service</Link>

            </div>
         </div>
        </>
        
        
    )
}
export default Navbar
  