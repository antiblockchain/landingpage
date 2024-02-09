
import "./styles.css"
import { Navigation } from './components/Navigation'

import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { motion, useScroll } from "framer-motion";
import { Footer } from "./components/Footer";
import { Home } from "./Home";
import { Blog } from "./Blog";
import Contact from "./Contact";
import { BlogPost } from "./components/BlogPost";

function App() {
  const { scrollYProgress } = useScroll();


  return (

    <Router>
      
      <Navigation></Navigation>
      
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <section className="top-section"><div></div></section>


      <Routes location={location} key={location.pathname}>
        
        <Route path="/" element= {<Home />} />

        <Route path="/blog" element= {<Blog />} />
        <Route path="/blog/:id" element= {<BlogPost />} />
        <Route path="/contact" element={<Contact />}/>
    </Routes>
    <Footer></Footer>
    <section className="bottom-section"><div></div></section>


    </Router>
    
  )
}

export default App
