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
      <Title>Hi!</Title>
        <Subtitle>let's get right into my projects.</Subtitle>

        
        </Container>
        
        <section>
        <Line className="header-line" id="projects"></Line>
        </section>
        <Container  className="project-container snap-point">
        <NormalTitle >projects</NormalTitle>
        <Card image="./img/ratemycat.jpg" title="Rate My Cat" 
        description="Tech: MERN stack. A fully authenticated RESTful social media site for cats, designed after Reddit and with features from various sites." url="https://cats.elynch.co" github="https://github.com/unexpectedlyalarming/rate-my-cat"></Card>

        <Card image="./img/melodiverse.png" title="Melodiverse" 
        description="Tech: MERN stack. A site to share audio samples and collaborate with others. Utilizes audio streaming and blobs, as well as custom React Hooks. " url="https://melodiverse.elynch.co" github="https://github.com/unexpectedlyalarming/melodiverse/"></Card>

        <Card image="./img/opentab.png" title="OpenTab" 
        description="Tech: React. OpenTab is an open source alternative to paid guitar editors. Not only is it user-friendly, but it also exports to markdown format for ease of use." url="https://unexpectedlyalarming.github.io/opentab/" github="https://github.com/unexpectedlyalarming/opentab/"></Card>
        
        <Card image="./img/musicidea.jpg" title="Music idea generator" 
        description="Tech: Javascript. Minimal website that generates ideas for creating a song" url="https://unexpectedlyalarming.github.io/music-idea-generator/" github="https://github.com/unexpectedlyalarming/music-idea-generator"></Card>

        <Card image="./img/weather.jpg" title="Weather App" 
        description="Tech: React. A react app that fetches data from a weather API, then finds a background from unsplash API" url="http://weather.elynch.co" github="https://github.com/unexpectedlyalarming/weather-react/"></Card>
        


          
          <Card image="./img/blogapi.jpg" title="Blog API" description="Tech: Node, Express, MongoDB. Authenticated RESTful API for managing my portfolio blog." url="blog" github="https://github.com/unexpectedlyalarming/home-blog-api"></Card>

        </Container>
        
        <Line className="projects-line"></Line>
        <section>
        <Container className="about-me snap-point">
          <NormalTitle>about me</NormalTitle>
          <Text>i'm a self taught developer with an interest in all things computers, unix, and music.</Text>
          <div className="icon-container">
            
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-react-original colored"></i>
          
          <i className="devicon-git-plain colored"></i>

          <i className="devicon-linux-plain inverted"></i>
          
          
          <i className="devicon-bash-plain inverted"></i>
          
          
          
          
          
            
          
          
          
          
          
          
          
          
          
          </div>
          <Text>i'm knowlegeable with the MERN stack as well as linux and networking. i also have some newer projects with postgresql.</Text>
          <Text>if i remember to post, you can learn more about my larger projects and myself in my blog.</Text>
          <Button as="a" href="/blog" $primary>blog</Button>
        </Container>
        </section>
        

    </ motion.div>
    )
}