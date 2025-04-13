import React, { useContext, useEffect, useState } from 'react'
import logo from "./assets/Screenshot 2025-03-16 162057.png"
import { AuthContext } from '../../Context/FormContext';
import { Link } from 'react-router-dom';
import "./Login.css"

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
      const [emailError, setEmailError] = useState("");
      const [passwordError, setPasswordError] = useState("");

      const {login,loading,error}=useContext(AuthContext)

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async(e) => {
        e.preventDefault();
    
        let valid = true;
    
        if (!formData.email) {
          setEmailError("Email is required");
          valid = false;
        } else {
          setEmailError("");
        }
    
        if (!formData.password) {
          setPasswordError("Password is required");
          valid = false;
        } else {
          setPasswordError("");
        }
    
        if (valid) {
         const result= await login(formData);
         if(result.success){
          alert("Uğurla daxil oldunuz! 🎉");
          setFormData({
            email: "",
            password: "",
          });
         }
        }
      };
  return (
    <div className="login-container">
    <img src={logo} />
    <h2>Hesabınıza daxil olun</h2>
    <p className="login-text">
      Korpem.az ailəsinə qoşulun və unikal endirimlər, yeni kolleksiyalar və
      fərdi təkliflərdən faydalanın
    </p>
    <form onSubmit={handleSubmit} className="login-form">
      {error && <div className="error-message">{error}</div>}
      <div className="input-group">
        <label htmlFor="email">
          Email <span className="important">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
        {emailError && <p className="error-message">{emailError}</p>}
      </div>
      <div className="input-group">
        <label htmlFor="password">
          Şifrə <span className="important">*</span>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Şifrə"
          value={formData.password}
          onChange={handleChange}
        />
        {passwordError && <p className="error-message">{passwordError}</p>}
      </div>
      <button type="submit" disabled={loading} className="login-button">
        {loading ? "Giriş edilir..." : "Giriş edin"}
      </button>

      <p className="profil">
        Hesabınız yoxdur? <Link to="/">Qeydiyyat</Link>
      </p>
    </form>
  </div>
  )
}

export default Login