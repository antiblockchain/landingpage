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
                <Text>created with React, Vite, Framer.js, and Styled Components</Text>
                <Text>copyright 2023, all rights reserved.</Text>
                </div>
            </div>
        </footer>
    )
}