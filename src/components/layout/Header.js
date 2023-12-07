import { Link } from "react-router-dom"

const Header = () => {
    return(
        <>
        <div> Logo </div>
        <div>
            <Link to={'/'}>Dashboard</Link>
            <Link to={'/aboutus'}>About Us</Link>
            <Link to={'/contactus'}>Contact Us</Link>
        </div>
        </>
    )
}

export default Header;