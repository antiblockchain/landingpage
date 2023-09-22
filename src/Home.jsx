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
        
        <Card image="./img/web.jpg" title="example one" description="interesting description giving lots of info" url="url"></Card>

        
        <Card image="./img/web.jpg" title="example two" description="Interesting description giving lots of info" url="url"></Card>

        <Card image="./img/web.jpg" title="example three" description="Interesting description giving lots of info" url="url"></Card>

          
          <Card image="./img/web.jpg" title="example four" description="Interesting description giving lots of info" url="url"></Card>

        </Container>
        
        <Line className="projects-line"></Line>
        <section>
        <Container className="about-me snap-point">
          <NormalTitle>about me</NormalTitle>
          <Text>i like to make stuff and problem-solve. i also do music on the side.</Text>
          <div className="icon-container">
            
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-typescript-plain colored"></i>
          <i className="devicon-react-original colored"></i>

          <i className="devicon-python-plain colored"></i>

          
          
          <i className="devicon-git-plain colored"></i>

          <i className="devicon-linux-plain inverted"></i>
          
          
          <i className="devicon-bash-plain inverted"></i>
          
          
          
          
            
          
          
          
          
          
          
          
          
          
          </div>
          <Text>these are some of the tech i'm familiar with. check out my projects to see more.</Text>
          <Text>if i remember to post, you can learn more about my projects and myself in my blog.</Text>
          <Button as="a" href="/blog" $primary>blog</Button>
        </Container>
        </section>
        

    </ motion.div>
    )
}