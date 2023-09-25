import React, { useEffect, useState } from "react";
import { Text, BlogTitle } from "./Text.style";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { SERVER_URL } from "../Blog";

export function BlogPost() {
    const [blog, setBlog] = useState();

    const { id } = useParams();

    useEffect(() => {
        Axios.get(SERVER_URL + "/blog/" + id, { credentials: 'include' }).then(res => {
            setBlog(res.data);
        });
    }, []);


    return (
        <motion.div
  initial={{opacity: 0}}
  animate={{opacity: 1}}
  exit={{opacity: 0, transition: { duration: 0.2 } }}>
        <div className="blogpost-container">
            <div className="title-card"><BlogTitle>{blog?.title}</BlogTitle></div>
            <div className="content-card"><Text>{blog?.description}</Text></div>

        </div>
        </motion.div>
    )
}
