import React from "react";
import { Subtitle, Title, Text } from "./components/Text.style";
import { Button } from "./components/Button.style";

export default function Contact () {
    return (
        <div className="wrapper">
            <Title>contact me.</Title>
            <Subtitle>You can find all of my information here including my github and resume.</Subtitle>
            <div className="contact-list">
            <Button as="a" href="https://github.com/unexpectedlyalarming" $primary>my github</Button>

            <Button as="a" href="" $primary>my resume</Button>
            <div>
            <Button as="a" href="mailto: test@example.com" $primary>email me</Button>
            <Text>example@email.com</Text>
            </div>
            <div>

            <Button as="a" href="tel:15555555555" $primary>call me</Button>
            <Text>+1 (555)-555-5555</Text>
            </div>
            </div>
        </div>
    )
}