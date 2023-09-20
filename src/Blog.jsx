import React, { useEffect, useState } from "react";
import { Subtitle, Title } from "./components/Text.style";
import { Container } from "./components/Container.style";
import { motion } from "framer-motion";
import { BlogCard } from "./components/Card";
import { BlogPost } from "./components/BlogPost";
import Axios from "axios";

export function Blog () {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        Axios.get("http://127.0.0.1:3000/blog").then(res => {
            setBlogs(res.data);
        })
    }, []);
    console.log(blogs);

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
    {blogs.map((blog) => {
        return <BlogPost key={blog._id} title={blog.title} content={blog.description}></BlogPost>
    })}
    
    </Container>
    </ motion.div>
    )
}