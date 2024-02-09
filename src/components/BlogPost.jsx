import React, { useEffect, useState } from "react";
import { Text, BlogTitle } from "./Text.style";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { SERVER_URL } from "../Blog";
import Markdown from 'react-markdown'


export function BlogPost() {
    const [blog, setBlog] = useState();

    const { id } = useParams();

    useEffect(() => {
        Axios.get(SERVER_URL + "/blog/" + id, { credentials: 'include' }).then(res => {
            setBlog(res.data);
        });
    }, []);

    const components = {
        p: ({ node, ...props }) => (
          <p style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }} {...props} />
        ),
      };

    const markdown = `
## Writing a blog API
\n
When I was creating my portfolio site, I knew that I wanted a blog to document projects. Something like Wordpress does this really well, but I wanted to implement it myself and have it integrated with my other projects. Immediately I knew that it didn't need to be incredibly complex since I was just making it for myself and I wanted something that would run well.
\n

## The process
\n
The first thing I did was figure out what I'd need for my schema to make the thing. Originally, I had a blurb and username, but I realized I'm the only user and I probably don't need a blurb, so I just cut that out; I can always generate them from descriptions if I really needed to. In the end, the whole model is just a title, description, and date. 
\n
After that, I went to work. I set up my routes in node and express. It worked the first time, but I realized I had no way of authenticating, so anyone could find a way to mess with my posts. Since I was the only user, instead of making a user schema I decided to authenticate with a name and password and store it in an environmental variable. This would not be great for any big project, but for my home blog it doesn't really matter. 
\n
By the time that I finished the blog routes and authentication, it turned out that I could just directly insert into the database so those routes weren't all that useful, though I decided to keep it so I can always restructure it or reuse it in another project in the future 
\n
## Something's missing
\n
Once I got the blog it worked from my test posts, but something was up. Sites like Wordpress, or even Github readme's look better than this. How can I get my text to have all that styling? I could just write in HTML tags and insert that into the database but that takes a lot of work and it's also just messy. What I needed was **markdown**, *which is what you're seeing right now*. I'm pretty familiar with markdown and its syntax, but I really wasn't sure how to implement it, or at least how to show it on the page.
\n
I thought about making my own way to parse it, but then I just did a quick google search and people have already done that for me. In fact, there's a react component that does that in a library called **react-markdown**. It makes it so easy that you just wrap your text in a component like a normal HTML tag.
\n
## Conclusion
\n
There was some bugs throughout this whole process, like mongodb erasing my database every 24 hours because I forgot to authenticate it, but overall the project was pretty quick to make and it's more flexible than using some other library or over-complicating things and using some third party site. It really wasn't a huge amount of new things, just some practice with basic APIs. If you want to look at the code for the project, check out my Github on my contact page.
`

    return (

        <div className="blogpost-container">
            <div className="title-card"><BlogTitle>{blog?.title}</BlogTitle></div>
<Markdown components={components} className="content-card">{blog?.description}</Markdown>

        </div>
    )
}
