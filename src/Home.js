import { useState } from "react";

const Home = () => {
    const[name, setName] = useState('Taiyyab');
    const[age, setAge] = useState(30);
    const handleClick = (e) =>{
        console.log('AAAAAAAAAAAAAaa' + e.target);
        let printName = name;
        let printAge = age;
        printName = name === 'Azeem' ? 'Taiyyab' : 'Azeem';
        printAge = age === 30 ? 50 : 30;
        setName(printName);
        setAge(printAge);
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click Me</button>

            <p>{name} is {age} years old.</p>
        </div>
     );
}
 
export default Home;