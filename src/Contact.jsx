import React from "react";
import { Subtitle, Title, Text } from "./components/Text.style";
import { Button } from "./components/Button.style";
import axios from "axios";
export default function Contact () {

    async function handleDownload (e) {
        try {
            const filename = "ElijahLynchResume.pdf";
            const response = await axios.get("https://api.blog.elynch.co/download/" + filename, { responseType: 'blob' });

            //Now download the file

            const url = window.URL.createObjectURL(new Blob([response.data]));

            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            link.click();
            window.URL.revokeObjectURL(url);


        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="wrapper">
            <Title>contact me.</Title>
            <Subtitle>You can find all of my information here including my github and resume.</Subtitle>
            <div className="contact-list">
            <Button as="a" href="https://github.com/unexpectedlyalarming" $primary>my github</Button>

            <Button as="a" onClick={handleDownload} $primary>my resume</Button>
            <div>
            <Button as="a" href="mailto: eli.lynch1912@gmail.com" $primary>email me</Button>
            <Text>eli.lynch1912@gmail.com</Text>
            </div>
            </div>
        </div>
    )
}