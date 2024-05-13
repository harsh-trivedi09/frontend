import { useNavigate } from "react-router-dom";
import About from "./About";

function Home() {
    const navigate= useNavigate()
    return (  
        <>
        <h1>THis is Home page</h1>
        <button onClick={()=>navigate('./About')}>About us</button>
        <button onClick={()=>navigate('./Home')}>home us</button>
        </>
    );
}

export default Home;