
import "./styles.css"
import { Navigation } from './components/Navigation'

import { BrowserRouter as Router } from "react-router-dom";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { motion, useScroll } from "framer-motion";
import { Footer } from "./components/Footer";

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


    <AnimatedRoutes />
    <Footer></Footer>
    <section className="bottom-section"><div></div></section>


    </Router>
    
  )
}

export default App
