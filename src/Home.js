import { useEffect, useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [errror, disableError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok){
                        throw Error('Could not connect to the server....');
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setLoading(false);
                    disableError(null);
                })
                .catch(err => {
                    console.log(err.message);
                    disableError(err.message);
                    setLoading(false);
                });
        }, 1000);
    }, []);

    return (
        <div className="home">
            {errror && <div>{errror}</div>}
            {isLoading && <div class="loader">Loading...</div>}
            {blogs && <BlogList sect={blogs} title="Blog List" />}
        </div>
    );
}

export default Home;