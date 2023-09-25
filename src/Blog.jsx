import React, { useEffect, useState } from "react";
import { Subtitle, Title } from "./components/Text.style";
import { Container } from "./components/Container.style";
import { motion } from "framer-motion";
import { BlogCard } from "./components/Card";
import { BlogPost } from "./components/BlogPost";
import Axios from "axios";
import { Link } from "react-router-dom";

export const SERVER_URL = "https://api.elynch.co";

export function Blog () {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        Axios.get(SERVER_URL + "/blog", {withCredentials: true}).then(res => {
            setBlogs(res.data);
        })
    }, []);

    return (
    <motion.div
  initial={{width: 0}}
  animate={{width: "100%"}}
  exit={{opacity: 0, transition: { duration: 0.2 } }}>
    <Container className="blog-container">
        <Title>Blog</Title>
        <Subtitle>A look at the process of some of the projects I've done.</Subtitle>
    </Container>
    <Container className="blog-posts-container">
        <ul>
            
    {blogs.map((blog) => {
        return <li><Link to={"/blog/" + blog._id}>{blog.title}</Link></li>
    })}
    
    </ul>
    
    </Container>
    </ motion.div>
    )
}
//<BlogPost key={blog._id} title={blog.title} content={blog.description}></BlogPost>