import React, { useState } from 'react';
import { register } from '../../utils/auth';
import styles from './Register.module.css'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); 

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleRegister = async () => {
    setIsLoading(true);
    setError(null);

    if (!validateEmail(email)) {
      setIsLoading(false);
      setError('Por favor, insira um email válido.');
      toast.error('Por favor, insira um email válido.', {
        position: 'top-right',
      });
      return;
    }

    try {
      await register(email, password, name);
      toast.success('Registro bem-sucedido!', {
        position: 'top-right',
      });
    } catch (err: any) {
      console.error('Erro no registro:', err);

      let errorMessage = 'Algo deu errado. Tente novamente.';

      if (err.response && err.response.data) {
        errorMessage = err.response.data.message || errorMessage;
      } else if (err.message.includes('network')) {
        errorMessage = 'Erro de conexão. Verifique sua internet.';
      } else if (err.message.includes('email already exists')) {
        errorMessage = 'Este email já está registrado.';
      }

      setError(errorMessage);
      toast.error(errorMessage, {
        position: 'top-right',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Registrar</h2>
        <div className={styles.inputGroup}>
          <label>Nome Completo</label>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button
          className={styles.button}
          onClick={handleRegister}
          disabled={isLoading || !email || !password || !name}
        >
          {isLoading ? 'Registrando...' : 'Registrar'}
        </button>
        <a className={styles.registerBttn} onClick={() => navigate("/login")}>Já tem uma conta? Faça login.</a>
      </div>
      <ToastContainer />
    </div>
  );
};
