import Index from "./component/Header";
import Slider from "./component/Slider/Slider";
import Products from "./component/Products/Products";
import Navbar from "./component/TopNavigation/Navbar";
import Map from "./component/Map/Map";
import { Footer } from "./component/Footer/Footer";


function App() {


  return (
    <>
    <Navbar/>
    <Index/>
    <Slider/>
    <Products/>
    <Map/>
    <Footer/>
    </>
  );
}

export default App
