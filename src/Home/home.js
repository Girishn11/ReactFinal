import React, { Component } from "react";
import Header from "./homeheader/header";
import Form from "./Form/form";
import Footer from "./footer/footer";
class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default Home;
