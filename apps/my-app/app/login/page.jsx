"use client";

import { useState } from "react";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    // We use the same API route but tell it if we are signing up or logging in
    const endpoint = isSignUp ? "/api/auth/signup" : "/api/login";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setMessage({ type: "success", text: isSignUp ? "Account created! Please login." : "Welcome back!" });
      if (!isSignUp) {
        // Redirect to dashboard after short delay if logging in
        setTimeout(() => window.location.href = "/dashboard", 1000);
      } else {
        setIsSignUp(false); // Move user to login view after signup
      }
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>{isSignUp ? "Create Account" : "Welcome Back"}</h2>
        
        {isSignUp && (
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            style={styles.input}
            required
          />
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          style={styles.input}
          required
        />

        {message.text && (
          <p style={message.type === "error" ? styles.error : styles.success}>
            {message.text}
          </p>
        )}

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Processing..." : isSignUp ? "Sign Up" : "Login"}
        </button>

        <p style={styles.toggleText}>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <span onClick={() => setIsSignUp(!isSignUp)} style={styles.link}>
            {isSignUp ? " Login" : " Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: { height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#0f172a" },
  form: { width: "350px", padding: "32px", background: "#111827", borderRadius: "16px", display: "flex", flexDirection: "column", gap: "16px", color: "white", boxShadow: "0 10px 25px rgba(0,0,0,0.3)" },
  title: { textAlign: "center", fontSize: "24px", fontWeight: "bold" },
  input: { padding: "12px", borderRadius: "8px", border: "1px solid #374151", background: "#1f2937", color: "white" },
  button: { padding: "12px", borderRadius: "8px", border: "none", background: "#3b82f6", color: "white", fontWeight: "bold", cursor: "pointer" },
  toggleText: { textAlign: "center", fontSize: "14px", color: "#9ca3af" },
  link: { color: "#3b82f6", cursor: "pointer", fontWeight: "600" },
  error: { color: "#f87171", fontSize: "14px" },
  success: { color: "#34d399", fontSize: "14px" }
};