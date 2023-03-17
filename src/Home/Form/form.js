import React, { useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
// import * as localStorage from "../../utils/local";
function Form() {
  const Navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username !== "" && password !== "") {
      if (username.length >= 5 && password.length >= 5) {
        if (username === password) {
          localStorage.setItem("user", username);

          Navigate("/dashboard");
        } else {
          alert("Username and password must be equal");
        }
      } else {
        alert("Please enter valid credentials!");
      }
    } else {
      alert("Username and Password must have 5 characters.");
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.mainsub}>
        <h3 className={styles.h3}>Welcome to Dashboard, Login</h3>

        <form className={styles.form}>
          <label className={styles.label} for="username">
            {" "}
            Username
          </label>
          <input
            id="username"
            className={styles.input}
            type="text"
            required={true}
            onChange={handleUsernameChange}
          />
          <label for="password"> Password</label>
          <input
            id="password"
            className={styles.input}
            type="password"
            required={true}
            onChange={handlePasswordChange}
          />
          <input
            className={styles.submit}
            type="submit"
            value="LOGIN"
            onClick={handleLogin}
          />
        </form>
      </div>
    </main>
  );
}
export default Form;
