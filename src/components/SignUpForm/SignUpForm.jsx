import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Update user state with user
      this.props.setUser(user);
    } catch {
      // Invalid signup
      this.setState({
        error: 'Sign Up Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
          <h1>CoNotes !</h1>
            <label>Name</label> <br></br>
            <input className="logininput" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <br></br>
            <label>Email</label> <br></br>
            <input className="logininput" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <br></br>
            <label>Password</label> <br></br>
            <input className="logininput" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <br></br>
            <label>Confirm</label> <br></br>
            <input className="logininput" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <br></br>
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}