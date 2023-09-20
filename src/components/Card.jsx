
import { Subtitle, Text } from "./Text.style"
import { Button } from "./Button.style"
import { Link } from "react-router-dom"

export function Card({image, title, description, url}) {
    return (
        <div className="card">
            <img src={image}></img>
            <div className="card-info">
                <Subtitle>{title}</Subtitle>
                <Text>{description}</Text>
                <div className="box">
                <Button as="a" href={url} $primary>live demo</Button>
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