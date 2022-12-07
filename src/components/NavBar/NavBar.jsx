import React from 'react'
import { Link } from 'react-router-dom';
import { logOut} from '../../utilities/users-service'

function NavBar ({user, setUser}) {
    function handleLogOut() {
        // Delegate to the users-service
        logOut();
        // Update state will also cause a re-render
        setUser(null);
      }

    return (
        <nav><Link to="/information">Information</Link>
        &nbsp; | &nbsp;
        <Link to="/information/new">New Page</Link>
        <div>Welcome, {user.name}</div>
        &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}

export default NavBar