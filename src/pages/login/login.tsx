import React, { useState } from 'react';
import { login } from '../../utils/auth';

//depois eu arrumo o Login e o Registro, oto entendendo como funciona

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      await login(email, password);
      console.log('Login bem-sucedido!');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Entrar</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

