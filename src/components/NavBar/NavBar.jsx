import React from 'react'
import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <nav><Link to="/information">Information</Link>
        &nbsp; | &nbsp;
        <Link to="/information/new">New Page</Link></nav>
    )
}

export default NavBar