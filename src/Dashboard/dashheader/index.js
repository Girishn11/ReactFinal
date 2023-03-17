import React, { useState } from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import {
  FaTachometerAlt,
  FaShoppingCart,
  FaRegUser,
  FaBars,
} from "react-icons/fa";

let user = localStorage.getItem("user");
console.log(user);
const Dashheader = () => {
  const Navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    Navigate("/");
  };
  const [hamburger, setHamburger] = useState(false);
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <span className={styles.navsub1}>
            <h3>PRODUCTADMIN</h3>
          </span>
        </div>
        <div className={styles.collapse}>
          <NavLink
            to="/dashboard"
            className={styles.anchor}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#fff",
              background: isActive ? "#f5a623" : "",
            })}
          >
            <div className={styles.navsub}>
              <span className={styles.spans}>
                <FaTachometerAlt className={styles.icons} />
                Dashboard
              </span>
            </div>
          </NavLink>
          <NavLink
            to="/product"
            className={styles.anchor}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#fff",
              background: isActive ? "#f5a623" : "",
            })}
          >
            <div className={styles.navsub}>
              <span className={styles.spans}>
                <FaShoppingCart className={styles.icons} />
                Products
              </span>
            </div>
          </NavLink>
          <NavLink
            to="/account"
            className={styles.anchor}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#fff",
              background: isActive ? "#f5a623" : "",
            })}
          >
            <div className={styles.navsub}>
              <span className={styles.spans}>
                <FaRegUser className={styles.icons} />
                Account
              </span>
            </div>
          </NavLink>
        </div>
        <div className={styles.admin}>
          <span className={styles.navsub} onClick={logout}>
            Admin,Logout
          </span>
        </div>
        <div className={styles.hamburgericon}>
          <button>
            <FaBars
              className={styles.faicon}
              onClick={() => setHamburger(!hamburger)}
            />
          </button>
        </div>
        {hamburger ? (
          <div className={styles.responmenu}>
            <ul className={styles.menulist}>
              <NavLink
                to="/dashboard"
                className={styles.menulink}
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#fff",
                  background: isActive ? "#f5a623" : "",
                })}
              >
                <li>
                  <span>
                    <FaTachometerAlt className={styles.menuicon} />
                    Dashboard
                  </span>
                </li>
              </NavLink>
              <NavLink
                to="/product"
                className={styles.menulink}
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#fff",
                  background: isActive ? "#f5a623" : "",
                })}
              >
                <li>
                  {" "}
                  <span>
                    <FaShoppingCart className={styles.menuicon} />
                    Products
                  </span>
                </li>
              </NavLink>
              <NavLink
                to="/account"
                className={styles.menulink}
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#fff",
                  background: isActive ? "#f5a623" : "",
                })}
              >
                <li>
                  <span>
                    <FaRegUser className={styles.menuicon} />
                    Account
                  </span>
                </li>
              </NavLink>

              <li>
                <span className={styles.menulink} onClick={logout}>
                  Admin,Logout
                </span>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Dashheader;
