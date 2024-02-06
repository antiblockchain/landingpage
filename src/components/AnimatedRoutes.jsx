import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../Home";
import { Blog } from "../Blog";
import {AnimatePresence} from 'framer-motion';
import { BlogPost } from "./BlogPost";
import Contact from "../Contact";


export function AnimatedRoutes() {
    const location = useLocation();
    return (
<AnimatePresence wait initial="true" >
    <Routes location={location} key={location.pathname}>
        
        <Route path="/" element= {<Home />} />

        <Route path="/blog" element= {<Blog />} />
        <Route path="/blog/:id" element= {<BlogPost />} />
        <Route path="/contact" element={<Contact />}/>
    </Routes>
    </AnimatePresence>
    )
}