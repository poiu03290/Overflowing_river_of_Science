import { Link } from "react-router-dom"

export const Nav = () => {
    return(
        <nav className="nav-bar">
            <div>
                <Link to='/'>Overflowing of river Science</Link>
                <div>
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}