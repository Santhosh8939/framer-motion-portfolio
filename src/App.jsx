import "./app.scss";
import { About } from "./components/about/About";
import { Cursor } from "./components/cursor/Cursor";
import { Hero } from "./components/hero/Hero";
import { Nav } from "./components/nav/Nav";
import { Parallax } from "./components/parallax/Parallax";
import { Route, Routes, useLocation  } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Contact } from "./components/contact/Contact";
import { Portfolio } from "./components/portfolio/Portfolio";

const App = () => {
  const location = useLocation();
  return (
  // <div>
  //   <section id="Homepage"><Navbar /> <Hero /> </section>
  //   <section id="Parallax"><Parallax /></section>
  //   <section>Contact</section>
  // </div>
  <>
<Cursor />
  <Nav />
  <AnimatePresence>
  <Routes location={location} key={location.pathname}>
    <Route path="/" element={<Hero />}></Route>
    <Route path="/index.html" element={<Hero />}></Route>
    {/* <Route path="/Parallax" element={<Parallax />}></Route> */}
    <Route path="/Portfolio" element={<Portfolio />}></Route>
    <Route path="/About" element={<About />}></Route>
    <Route path="/Contact" element={<Contact />}></Route>
    
  </Routes>
  </AnimatePresence>


  </>
  );
};

export default App;