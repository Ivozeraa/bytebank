import { useEffect, useState } from "react";
import { getUserProfile } from "../utils/auth";
import { toast, ToastContainer } from "react-toastify";

import S from "./styles/Dashboard.module.css";

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
      <div className={S.container}>
        <div className={S.titleDashboard}>
          <h1 className={S.title}>Welcome,</h1>
          {userName ? 
            <h1 className={S.name}>{`${userName}!`}</h1> :
            <h1 className={S.name}>Visitant!</h1> 
          }
        </div>
        
      </div>

      <ToastContainer />
    </>
  );
};
