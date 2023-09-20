import React from "react";
import { Text, BlogTitle } from "./Text.style";
import { motion } from "framer-motion";

export function BlogPost({ title, content}) {
    return (
        <motion.div
  initial={{opacity: 0}}
  animate={{opacity: 1}}
  exit={{opacity: 0, transition: { duration: 0.2 } }}>
        <div className="blogpost-container">
            <div className="title-card"><BlogTitle>{title}</BlogTitle></div>
            <div className="content-card"><Text>{content}</Text></div>

        </div>
        </motion.div>
    )
}