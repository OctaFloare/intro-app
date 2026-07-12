import { Link } from "react-router-dom"

export const Navbar = () => {
    return <div className="navbar">
        <Link to="/contact">Contact</Link>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/episodes">Episodes</Link>
    </div>
}
