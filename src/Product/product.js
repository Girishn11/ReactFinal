import React from "react";
import Dashheader from "../Dashboard/dashheader";
import Footer from "../Home/footer/footer";
import styles from "./product.module.css";
import Productmain from "./productmain/index";
function Product() {
  return (
    <div>
      <Dashheader />

      <Productmain />

      <Footer />
    </div>
  );
}
export default Product;
