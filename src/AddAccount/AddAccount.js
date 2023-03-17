import React, { Component } from "react";
import Dashheader from "../Dashboard/dashheader/index.js";
import Styles from "./style.module.css";
import Footer from "../Home/footer/footer.js";
import Addaccountmain from "./addaccountbody/index.js";

function AddAccount() {
  return (
    <div>
      <Dashheader />

      <Addaccountmain />

      <Footer />
    </div>
  );
}
export default AddAccount;
