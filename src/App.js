import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialMedia from "./components/SocialMedia";
import About from "./components/About";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";

function App() {
  
  return (
   <div>
    <Navbar />
    <Home />
    <SocialMedia />
    <About />
    <Portofolio />
    <Contact />
   </div>
  );
}

export default App;