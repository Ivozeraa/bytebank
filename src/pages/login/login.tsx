import React, { useState } from 'react';
import { login } from '../../utils/auth';
import styles from './styles.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await login(email, password);
      toast.success("Login realizado com sucesso!")
    } catch (err: any) {
      console.error('Erro no login:', err);

      let errorMessage = 'Algo deu errado. Tente novamente.';

      if (err.response && err.response.data) {
        errorMessage = err.response.data.message || errorMessage;
      } else if (err.message.includes('network')) {
        errorMessage = 'Erro de conexão. Verifique sua internet.';
      } else if (err.message.includes('invalid credentials')) {
        errorMessage = 'Email ou senha incorretos.';
      }

      setError(errorMessage);
      toast.error(`${errorMessage}`, { position: 'top-right' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
    <ToastContainer />

      <div className={styles.card}>
        <h2 className={styles.title}>Entrar</h2>
        {error && <p className={styles.error} aria-live="polite">{error}</p>}
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} disabled={isLoading} className={styles.button}>
          {isLoading ? 'Entrando...' : 'Entrar'}
        </button>
      </div>
    </div>
  );
};
