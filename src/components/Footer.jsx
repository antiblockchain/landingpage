import React from "react";
import { Subtitle, Text } from "./Text.style";
import { Line } from "./Line.style";
import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <footer>

            <div className="footer-container">
                <div className="footer-text">
                    <Subtitle as={Link} to="/contact">contact me.</Subtitle>
                <Text>written in react, and nodejs/express for my blog</Text>
                <Text>copyright 2024, all rights reserved.</Text>
                </div>
            </div>
        </footer>
    )
}