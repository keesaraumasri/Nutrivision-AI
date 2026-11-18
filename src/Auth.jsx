import React, { useState } from "react";
import "./Auth.css";

function Auth({ onSuccess }) {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    age: "",
    weight: "",
    diet: "Vegetarian",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please enter email and password");
      return;
    }

    if (!isLogin && (!form.name || !form.age || !form.weight)) {
      alert("Please complete all registration details");
      return;
    }

    // Demo authentication only.
    // Real account verification will be connected to the backend.
    const user = {
      name: isLogin ? form.email.split("@")[0] : form.name,
      age: form.age,
      weight: form.weight,
      diet: form.diet,
      email: form.email
    };

    onSuccess(user);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-header">
          <div className="auth-logo">🥗</div>
          <h1>NutriVision AI</h1>
          <p>Intelligent Food Recognition & Personalized Nutrition</p>
        </div>

        <div className="auth-tabs">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
            type="button"
          >
            Login
          </button>

          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
            type="button"
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <label>Full Name</label>
              <input
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <label>Age</label>
              <input
                name="age"
                type="number"
                min="1"
                placeholder="Enter your age"
                value={form.age}
                onChange={handleChange}
                required
              />

              <label>Weight (kg)</label>
              <input
                name="weight"
                type="number"
                min="1"
                step="0.1"
                placeholder="Enter your weight"
                value={form.weight}
                onChange={handleChange}
                required
              />

              <label>Food Preference</label>
              <select
                name="diet"
                value={form.diet}
                onChange={handleChange}
              >
                <option>Vegetarian</option>
                <option>Non-Vegetarian</option>
              </select>
            </>
          )}

          <label>Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button className="submit-btn" type="submit">
            {isLogin ? "Login to NutriVision" : "Create Account"}
          </button>
        </form>

        <p className="auth-footer">
          Your personal AI-powered nutrition assistant.
        </p>

      </div>
    </div>
  );
}

export default Auth;