const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Blog Website</h1>
            <div className="links">
                <a href="/" className="">HOME</a>
                <a href="/create" >New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;