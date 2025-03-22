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
        setUserName(profile?.name || "Name not found");
      } catch (err) {
        setError("Error loading profile");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);
  
  useEffect(() => {
    let toastId: any; 

    if (loading) {
      toastId = toast.loading("Loading...");
    } else {
      toast.dismiss(toastId); 
    }

    return () => toast.dismiss(toastId); 
  }, [loading]);

  if (error) {
    toast.error(error);
  }

  return (
    <>
      <div className={style.container}>
        <h1 className={style.welcome}>Welcome</h1>
        {userName ? 
          <h2 className={style.name}>{`${userName}!`}</h2> :
          <h2 className={style.name}></h2> 
        }
      </div>

      <ToastContainer />
    </>
  );
};
