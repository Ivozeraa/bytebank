import { useEffect, useState } from "react";
import { getUserProfile } from "../utils/auth";
import { toast, ToastContainer } from "react-toastify";
import style from "./styles/dashboard.module.css";

export const Dashboard = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await getUserProfile();
        setUserName(profile?.name || "Nome não encontrado");
      } catch (err) {
        setError("Erro ao carregar o perfil");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);
  
  useEffect(() => {
    let toastId: any; // Armazena o ID do toast para removê-lo depois

    if (loading) {
      toastId = toast.loading("Carregando...");
    } else {
      toast.dismiss(toastId); // Remove o toast quando `loading` for `false`
    }

    return () => toast.dismiss(toastId); // Cleanup para evitar múltiplos toasts
  }, [loading]);

  if (error) {
    toast.error(error);
  }

  return (
    <>
      <div className={style.container}>
        <h1 className={style.welcome}>Seja bem vindo</h1>
        <h2 className={style.name}>{userName}</h2>
      </div>

      <ToastContainer />
    </>
  );
};
