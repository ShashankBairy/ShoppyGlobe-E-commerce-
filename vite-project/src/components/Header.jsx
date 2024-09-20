import './style.css'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
function Header(){
    return(
        <>
        <div className="header">
            <h1>ShoppyGlobe</h1>
            <div className="nav">
                    <ul>
                        <Link to='/'>Home</Link>
                        <Link to='/cart'><IoCartOutline/>Cart</Link> 
                    </ul>
            </div>
        </div>
        </>
    )
}

export default Header