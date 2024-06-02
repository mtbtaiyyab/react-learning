import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h2>Sorry!</h2>
            <p>The page you are looking is not present.</p>
            <Link to='/'> HOME PAGE</Link>
        </div>
     );
}
 
export default NotFound
