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
        { title: 'My New website', body: 'loremipsum...', author: 'mario', id: 1 },
        { title: 'Welcome Website', body: 'loremipsum...', author: 'Dino', id: 2 },
        { title: 'Web Dev Server', body: 'loremipsum...', author: 'James', id: 3 }
    ]);
    return (
        <div className="home">
            <BlogList sect={blogs} title="Blog List"/>
            {/*
            useState Example <button onClick={handleClick}>Click Me</button>

            <p>{name} is {age} years old.</p> */}

        </div>
    );
}

export default Home;