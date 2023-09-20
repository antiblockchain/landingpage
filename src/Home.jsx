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
        <Subtitle>i make stuff. look below to see stuff i made.</Subtitle>

        
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
          <Text>i like to make stuff and problem-solve. i try to learn new things as they come out and experiment with whatever the newest trends are.</Text>
          <div className="icon-container">
            
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-typescript-plain colored"></i>
          <i className="devicon-react-original colored"></i>

          <i className="devicon-python-plain colored"></i>

          
          
          <i className="devicon-git-plain colored"></i>

          <i className="devicon-linux-plain inverted"></i>
          
          
          <i className="devicon-bash-plain inverted"></i>
          
          
          
          
            
          
          
          
          
          
          
          
          
          
          </div>
          <Text>these are some of the things i am familiar with or proficient in.</Text>
          <Text>when i'm not programming, i'm usually playing guitar, piano, or doing photography.</Text>
          <Button as="a" href="/blog" $primary>blog for my projects</Button>
        </Container>
        </section>
        

    </ motion.div>
    )
}