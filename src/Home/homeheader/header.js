import React, { Component, useState } from "react";
import styles from "./styles.module.css";
import {
  FaTachometerAlt,
  FaShoppingCart,
  FaRegUser,
  FaBars,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
function Header() {
  const [hamburger, setHamburger] = useState(false);

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <span className={styles.navsub1}>PRODUCTADMIN</span>
        </div>
        <div className={styles.collapse}>
          <div className={styles.navsub}>
            <span className={styles.anchor}>
              <FaTachometerAlt className={styles.icons} />
              Dashboard
            </span>
          </div>
          <div className={styles.navsub}>
            <span className={styles.anchor}>
              <FaShoppingCart className={styles.icons} />
              Products
            </span>
          </div>
          <div className={styles.navsub}>
            <span className={styles.anchor}>
              <FaRegUser className={styles.icons} />
              Account
            </span>
          </div>
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
            </ul>
          </div>
        ) : null}
      </nav>
    </div>
  );
}

export default Header;
