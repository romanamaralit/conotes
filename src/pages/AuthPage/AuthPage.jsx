import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      <div>
        <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP HERE' : 'LOG IN HERE'}</button>
      </div>
    </main>
  );
}