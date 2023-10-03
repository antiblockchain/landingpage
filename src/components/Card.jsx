
import { Subtitle, Text } from "./Text.style"
import { Button } from "./Button.style"
import { Link } from "react-router-dom"

export function Card({image, title, description, url, github}) {
    return (
        <div className="card">
            <div className="card-img">
                
            <img src={image} alt={title}></img>
            </div>
            <div className="card-info">
                <Subtitle>{title}</Subtitle>
                <Text>{description}</Text>
                <div className="box">
                <Button as="a" href={url} target="_blank" rel="noopener noreferrer" $primary >live demo</Button>
                <Button as="a" href={github} target="_blank" rel="noopener noreferrer" $secondary>github</Button>
                </div>
            </div>
        </div>
    )
}
export function BlogCard({title, description, url}) {
    return (
        <div className="card">
            <div className="card-info">
                <Subtitle>{title}</Subtitle>
                <Text>{description}</Text>

                <Link to={url} className="link">View post</Link>
            </div>
        </div>
    )
}