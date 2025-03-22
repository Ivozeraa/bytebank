import React, { useState } from "react";
import { login } from "../../utils/auth";
import styles from "./styles.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await login(email, password);
      toast.success("Login successful!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err: any) {
      console.error("Login error:", err);

      let errorMessage = "Something went wrong. Try again.";

      if (err.response && err.response.data) {
        errorMessage = err.response.data.message || errorMessage;
      } else if (err.message.includes("network")) {
        errorMessage = "Connection error. Check your internet.";
      } else if (err.message.includes("invalid credentials")) {
        errorMessage = "Incorrect email or password.";
      }

      setError(errorMessage);
      toast.error(errorMessage, { position: "top-right" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer />

      <div className={styles.card}>
        <h2 className={styles.title}>Login</h2>
        {error && (
          <p className={styles.error} aria-live="polite">
            {error}
          </p>
        )}
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleLogin}
          disabled={isLoading}
          className={styles.button}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <a
          onClick={() => navigate("/register")}
          className={styles.registerBttn}
        >

          Don't have an account? Sign up now
        </a>
      </div>
    </div>
  );
};
