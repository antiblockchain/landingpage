import React from "react";
import { Subtitle, Text } from "./Text.style";
import { Line } from "./Line.style";

export function Footer() {
    return (
        <footer>
            <Line></Line>
            <div className="footer-container">
                <div className="footer-text">
                    <Subtitle as="a" href="">contact me.</Subtitle>
                <Text>powered by react, framer.js, and nodejs/express for my blog</Text>
                <Text>copyright 2023, all rights reserved.</Text>
                </div>
            </div>
        </footer>
    )
}