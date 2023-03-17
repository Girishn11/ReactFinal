import React from "react";
import Dashheader from "../Dashboard/dashheader/index.js";
import Productinformations from "./productinfomain/index.js";
import Styles from "./style.module.css";
import Footer from "../Home/footer/footer.js";

function ProductInfo() {
  // const { chart: Latest } = props;
  // console.log(Latest);
  return (
    <div>
      <Dashheader />

      <Productinformations />

      <Footer />
    </div>
  );
}
export default ProductInfo;
