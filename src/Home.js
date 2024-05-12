import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";



const Home = () => {
    const { data: blogs, isLoading, errror } = useFetch('http://localhost:8000/blogs');
    return (
        <div className="home">
            {errror && <div>{errror}</div>}
            {isLoading && <div class="loader">Loading...</div>}
            {blogs && <BlogList sect={blogs} title="Blog List" />}
        </div>
    );
}

export default Home;