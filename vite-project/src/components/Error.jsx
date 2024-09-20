import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom";
import './style.css'
function Error(){
    const err = useRouteError();
    // console.log(err)
    return(
        <>
        <h1>Error Page</h1>
        <h2>Enter Valid Page path</h2>
        <p>{err.status} {err.statusText}</p>
        <h3>{err.data}</h3>
        <Link to='/' className="homebutton">
        <button>Back to HOME</button>
        </Link>
        </>
    )
}

export default Error