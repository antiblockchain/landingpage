import React from "react";
import { Line } from "./components/Line.style";
import { Button } from "./components/Button.style";
import { NormalTitle, Subtitle, Text, Title } from "./components/Text.style";
import { Container } from "./components/Container.style";
import { Card } from "./components/Card";
import { motion } from 'framer-motion';


export function Home () {
  
    return (

<motion.div
  initial={{opacity: 0}}
  animate={{opacity: 1}}
  exit={{x: window.innerWidth, transition: { duration: 0.2 } }} className="wrapper">
        <Container className="header-container snap-point">
      <Title>welcome.</Title>
        <Subtitle>i'm a fullstack dev.</Subtitle>

        
        </Container>
        
        <section>
        <Line className="header-line" id="projects"></Line>
        </section>
        <Container  className="project-container snap-point">
        <NormalTitle >projects</NormalTitle>
        
        <Card image="./img/socialmediaclone.jpg" title="Social media clone" description="A social media CRUD site loosely based on facebook built with the MERN stack." url="https://media.elynch.co" github="https://github.com/unexpectedlyalarming/social-media-clone"></Card>

        
        <Card image="./img/web.jpg" title="example two" description="Interesting description giving lots of info" url="url"></Card>

        <Card image="./img/web.jpg" title="example three" description="Interesting description giving lots of info" url="url"></Card>

          
          <Card image="./img/blogapi.jpg" title="Blog API" description="Basic RESTful API for managing my portfolio blog." url="blog" github="https://github.com/unexpectedlyalarming/home-blog-api"></Card>

        </Container>
        
        <Line className="projects-line"></Line>
        <section>
        <Container className="about-me snap-point">
          <NormalTitle>about me</NormalTitle>
          <Text>from a young age i have had an interest in computers. i never learned to program as a kid, but as i got older i wanted to learn how to make things that i see online. i also do music on the side.</Text>
          <div className="icon-container">
            
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-react-original colored"></i>

          <i className="devicon-python-plain colored"></i>

          
          
          <i className="devicon-git-plain colored"></i>

          <i className="devicon-linux-plain inverted"></i>
          
          
          <i className="devicon-bash-plain inverted"></i>
          
          
          
          
            
          
          
          
          
          
          
          
          
          
          </div>
          <Text>above is some of the tech and libraries i've used with projects. check out my projects to see more. i'm knowlegeable with the MERN stack as well as linux and networking.</Text>
          <Text>if i remember to post, you can learn more about my projects and myself in my blog.</Text>
          <Button as="a" href="/blog" $primary>blog</Button>
        </Container>
        </section>
        

    </ motion.div>
    )
}