import React, { Component } from "react";
import Dashheader from "../Dashboard/dashheader/index.js";
import Styles from "./styles.module.css";
import Footer from "../Home/footer/footer.js";
import Accountmain from "./AccoutBody/index.js";
function Account() {
  return (
    <div>
      <Dashheader />

      <Accountmain />

      <Footer />
    </div>
  );
}
export default Account;
