
import { Link } from "react-router-dom";


export function Navigation () {
    
    return (
        <>
        <nav>

            <div className="navigation-container">
                <ul>
                    <li>
                        <Link to="/" className="link">Home</Link>

                    </li>
                    <li>
                        <Link to="/blog" className="link">Blog</Link>
                        
                    </li>
                    <li>
                        <Link to="/contact" className="link">Contact</Link>
                        
                    </li>
                </ul>
            </div>
            
        </nav>
        
        </>
    )
}