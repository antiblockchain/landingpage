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
        <Card image="./img/ratemycat.jpg" title="Rate My Cat" description="A site to post and rate pictures of cats, and create your own profile. Be competitive with the daily leaderboards!" url="https://cats.elynch.co" github="https://github.com/unexpectedlyalarming/rate-my-cat"></Card>

        <Card image="./img/melodiverse.png" title="Melodiverse" description="A site to share samples and interact with others. Fullstack application built with the MERN stack." url="https://melodiverse.elynch.co" github="https://github.com/unexpectedlyalarming/melodiverse/"></Card>

        <Card image="./img/opentab.png" title="OpenTab" description="OpenTab is an open source alternative to paid guitar editors. Not only is it userfriendly, but it also exports to markdown format for ease of use." url="https://unexpectedlyalarming.github.io/opentab/" github="https://github.com/unexpectedlyalarming/opentab/"></Card>
        
        <Card image="./img/musicidea.jpg" title="Music idea generator" description="Minimal website that generates ideas for creating a song" url="https://unexpectedlyalarming.github.io/music-idea-generator/" github="https://github.com/unexpectedlyalarming/music-idea-generator"></Card>

        <Card image="./img/weather.jpg" title="Weather App" description="A react app that fetches data from the weather service, then finds a background from unsplash API" url="http://weather.elynch.co" github="https://github.com/unexpectedlyalarming/weather-react/"></Card>
        


          
          <Card image="./img/blogapi.jpg" title="Blog API" description="Authenticated RESTful API for managing my portfolio blog." url="blog" github="https://github.com/unexpectedlyalarming/home-blog-api"></Card>

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