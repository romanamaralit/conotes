import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user,setUser}) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
        <Link className="home" to="/" href="#">Home</Link>
        <br></br>
        {/* <h3>Welcome, {user.name}!</h3> */}
        <Link className="logout" to=""href="#" onClick={handleLogOut}>Log Out</Link>
    </>
  )
}