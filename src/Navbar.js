import { Link } from "react-router-dom/cjs/react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Blog Website</h1>
            <div className="links">
                <Link to="/" className="">HOME</Link>
                <Link to="/create" >New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;