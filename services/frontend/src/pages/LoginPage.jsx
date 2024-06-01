import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate('/about');
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <div className="login_page container form">
      <h1>Log in</h1>
      {error && <p className="alert alert-danger">{error}</p>}

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">
          Email address
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        </label>
        <div>
          <small id="emailHelp" className="form-text text-muted">We`&apos;`ll never share your email with anyone else.</small>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">
          Password
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
        </label>
      </div>
      <div>
        <button onClick={login} type="submit" className="btn btn-primary">Log In</button>
      </div>
      <div>
        <Link to="/create_account">Don`&apos;`t have an account? Click Here</Link>
      </div>
    </div>
  );
}
