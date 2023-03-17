import React from "react";
import Dashheader from "./dashheader/index.js";
import Sectionone from "./dashbord1st/index.js";
import Styles from "./style.module.css";
import Footer from "../Home/footer/footer.js";

function Dashboard() {
  return (
    <div>
      <Dashheader />

      <Sectionone />

      <Footer />
    </div>
  );
}
export default Dashboard;
