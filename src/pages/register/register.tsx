import React, { useState } from 'react';
import { register } from '../../utils/auth';

//depois eu arrumo o Login e o Registro, oto entendendo como funciona

export const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    try {
      await register(email, password);
      alert('Registro bem-sucedido!');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Registrar</h2>
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
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
};

