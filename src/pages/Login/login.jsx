import React, { useState } from 'react';

import './login.css';
import { Button, Input } from '../../components';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="background">
      <div className="content-wrapper">
        <div className="main-container">
          <h2 className="title">LOGIN</h2>
          <Input placeholder="username" type="text" value={username.trim()} onChange={(e) => setUsername(e.target.value)} primary={true} />
          <Input placeholder="senha" type="password" value={password.trim()} onChange={(e) => setPassword(e.target.value)} primary={true} />
        </div>

        <div className="side-container">
          <Button
            primary={true}
            children="ENTRAR"
            onClick={() => console.log('btnClick')}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;