import { BrowserRouter,Link,Route ,Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Error from "./Component/404";

function App() {
  return (
    <>
      <BrowserRouter>
      <Link to="about">About</Link>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
      <h1>Topic: React router</h1>
    </>
  );
}

export default App;
