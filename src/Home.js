import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    // USESTATE EXAMPLE
    // const[name, setName] = useState('Taiyyab');
    // const[age, setAge] = useState(30);
    // const handleClick = (e) =>{
    //     console.log('AAAAAAAAAAAAAaa' + e.target);
    //     let printName = name;
    //     let printAge = age;
    //     printName = name === 'Azeem' ? 'Taiyyab' : 'Azeem';
    //     printAge = age === 30 ? 50 : 30;
    //     setName(printName);
    //     setAge(printAge);
    // }
    const [blogs, setBlogs] = useState([
        { title: 'My New website', body: 'loremipsum...', author: 'Mario', id: 1 },
        { title: 'Welcome Website', body: 'loremipsum...', author: 'Dino', id: 2 },
        { title: 'Web Dev Server', body: 'loremipsum...', author: 'Mario', id: 3 }
    ]);
    const handleBlog = (id) => {
        const filteredBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(filteredBlog);
    }
    return (
        <div className="home">
            <BlogList sect={blogs} title="Blog List" deleteBlog = {handleBlog} />
            {/* Reusing Components */}
            {/* <BlogList sect={blogs.filter((blog) => (blog.author === 'Mario'))} title="Filtered Blog List"/> */}
            {/*
            useState Example <button onClick={handleClick}>Click Me</button>

            <p>{name} is {age} years old.</p> */}

        </div>
    );
}

export default Home;