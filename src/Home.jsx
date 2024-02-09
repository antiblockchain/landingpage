import React from "react";
import { Line } from "./components/Line.style";
import { Button } from "./components/Button.style";
import { Link } from 'react-router-dom'
import { NormalTitle, Subtitle, Text, Title } from "./components/Text.style";
import { Container } from "./components/Container.style";
import { Card } from "./components/Card";
import { motion } from 'framer-motion';
import GitHub from './components/GitHub'

export function Home () {
  
    return (

<motion.div
  initial={{opacity: 0}}
  animate={{opacity: 1}}
  exit={{x: window.innerWidth, transition: { duration: 0.2 } }} className="wrapper">
        <Container className="header-container snap-point">
      <Title>Hi!</Title>
        <Subtitle>Let's get right into my projects.</Subtitle>

        
        </Container>
        
        <section>
        <Line className="header-line" id="projects"></Line>
        </section>
        <Container  className="project-container snap-point">
        <NormalTitle >Highlight Projects</NormalTitle>
        <Card image="./img/ratemycat.jpg" title="Rate My Cat" 
        description="Tech: MERN stack. A fully authenticated RESTful social media site for cats, designed after Reddit and with features from various sites." url="https://cats.elynch.co" github="https://github.com/unexpectedlyalarming/rate-my-cat"></Card>

        <Card image="./img/melodiverse.png" title="Melodiverse" 
        description="Tech: MERN stack. A site to share audio samples and collaborate with others. Utilizes audio streaming and blobs, as well as custom React Hooks. " url="https://melodiverse.elynch.co" github="https://github.com/unexpectedlyalarming/melodiverse/"></Card>

        <Card image="./img/opentab.png" title="OpenTab" 
        description="Tech: React. OpenTab is an open source alternative to paid guitar editors. Not only is it user-friendly, but it also exports to markdown format for ease of use." url="https://unexpectedlyalarming.github.io/opentab/" github="https://github.com/unexpectedlyalarming/opentab/"></Card>
        
      

        <NormalTitle>In Progress</NormalTitle>
      
        <Card image="./img/recipe.png" title="Recipe.collab" 
        description="Tech: PERN stack. A recipe sharing website that encourages getting straight to the recipe. It also has a version control system similar to Git that allows users to modify and fork recipes."  github="https://github.com/unexpectedlyalarming/recipe.collab/"></Card>
        
          
        <GitHub />
        </Container>
        
        <Line className="projects-line"></Line>
        <section>
        <Container className="about-me snap-point">
          <NormalTitle>about me</NormalTitle>
          <div className="icon-container">
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-react-original colored"></i>
          <i className="devicon-git-plain colored"></i>
          <i className="devicon-linux-plain inverted"></i>
          <i className="devicon-bash-plain inverted"></i>
          </div>
          <Text>I'm a self taught developer passionate about all things computers, unix, and music. I mostly specialize with the MERN stack as well as linux and networking. My current projects have been focused more on postgresql.</Text>
          <Text>When I remember to post, you can learn more about my larger projects and myself in my <Link to="/blog">blog.</Link></Text>
        </Container>
        </section>
        

    </ motion.div>
    )
}