import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";
import S from "./styles/Header.module.css";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export const Header = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);

    toast.dark("Logging out, see you later!");

    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  return (
    <>
      <header className={S.header}>
        <div className={S.logo}>
          <img src="src/assets/logo.png" alt="logo" />
          <h2 className={S.headerTitle}>BYTEBANK</h2>
        </div>

        {user ? (
          <button onClick={handleLogout} className={S.login}>
            <FaSignOutAlt />
            <p>Logout</p>
          </button>
        ) : (
          <Link to="/login" className={S.sidebarPage}>
            <button className={S.login}>
              <FaSignInAlt />
              <p>Login</p>
            </button>
          </Link>
        )}
      </header>
    </>
  );
};
