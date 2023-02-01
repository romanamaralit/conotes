import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div>
          <h1>CoNotes !</h1>
            <label>Email</label> <br></br>
            <input className="logininput" type="text" name="email" value={credentials.email} onChange={handleChange} required />
            <br></br>
            <label>Password</label> <br></br>
            <input className="logininput" type="password" name="password" value={credentials.password} onChange={handleChange} required />
            <br></br>
            <button type="submit" >LOG IN</button>
          </div>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}