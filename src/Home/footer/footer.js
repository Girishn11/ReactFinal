import React, { Component } from "react";
import styles from "./style.module.css";
class Footer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={styles.footer}>
        <p className={styles.para}>
          Copyright © 2018 All rights reserved. Design: Template Mo
        </p>
      </div>
    );
  }
}

export default Footer;
