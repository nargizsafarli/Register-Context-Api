import {createContext, useState } from "react";

export const AuthContext=createContext();
export const AuthProvider=({children})=>{
 
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  const register = async (userData) => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch("https://ekorpem-api.webluna.org/api/v1/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });
    
          const data = await response.json();
    
          if (!response.ok) {
            throw new Error(data.message || "Daxil etdiyiniz E-poçt artıq mövcuddur.");
          }
    
          setUser(data);
        } catch (err) {
          setError(err.message || "Uğursuz qeydiyyat");
        } finally {
          setLoading(false);
        }
      };



      const login = async (userData) => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch("https://ekorpem-api.webluna.org/api/v1/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });
    
          const data = await response.json();
    
          if (!response.ok) {
            throw new Error("Email və ya şifrə yanlışdır!");
          }
    
          setToken(data.token);
          setUser(data);
        } catch (err) {
          setError(err.message || "Daxil olmaq mümkün olmadı");
        } finally {
          setLoading(false);
        }
      };

return (
    <AuthContext.Provider value={{user,token,loading,error,register,login}}>
     {children}
    </AuthContext.Provider>
)
}



