import React, { useEffect, useState } from "react";
import Styles from "./productinfo.module.css";
// import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getuser, updateUser } from "../../redux/redux";

const Productinformations = () => {
  // const [edit, setEdit] = useState(initialState);
  // const dispatch = useDispatch();
  const { id } = useParams();
  //console.log(useParams());

  // const { users } = useSelector((state) => state.user);
  // useEffect(() => {
  //   dispatch(getuser(id));
  //   setEdit({ ...users });
  // }, [id, users]);
  const apiget = JSON.parse(localStorage.getItem("API"));
  const { productsPage } = apiget || {};
  const data = JSON.parse(localStorage.getItem("newproduct"));
  // console.log(productsPage);
  const { products } = productsPage || {};
  const { newproduct } = data || {};
  if (!productsPage) {
    return <h1>Loading...</h1>;
  }
  const product = products.find((item) => item.name === id);
  // const product1 = newproduct.find((item) => item.pname === id);
  const { category, description, expireDate, name, stock, unitSold } =
    product || {};
  return (
    <div className={Styles.main1}>
      {/* <div className={Styles.row}> */}
      <div className={Styles.main}>
        <div>
          <h2>Edit Product</h2>
        </div>

        <div className={Styles.row}>
          <div className={Styles.div1}>
            <form className={Styles.productform}>
              <div className={Styles.productdiv}>
                <label className={Styles.labels} for="name">
                  Product Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  className={Styles.productinput}
                />
              </div>
              <div className={Styles.productdiv}>
                <label className={Styles.labels} for="description">
                  Description
                </label>
                <textarea className={Styles.productinput} rows="5" required="">
                  {description}
                </textarea>
              </div>
              <div lassName={Styles.productdiv}>
                <label className={Styles.labels} for="category">
                  Category
                </label>
                <select className={Styles.productinput} id="category">
                  <option>Select category</option>
                  <option value="1" selected={category}>
                    {category}
                  </option>

                  <option value="2">Most Popular</option>
                  <option value="3">Trending</option>
                </select>
              </div>
              <div className={Styles.row}>
                <div lassName={Styles.productdiv}>
                  <label className={Styles.labels1} for="expire_date">
                    Expire Date
                  </label>
                  <input
                    id="expire_date"
                    name="expire_date"
                    type="text"
                    value={expireDate}
                    className={Styles.productinput1}
                    data-large-mode="true"
                  />
                </div>
                <div lassName={Styles.productdiv}>
                  <label className={Styles.labels1} for="stock">
                    Units In Stock
                  </label>
                  <input
                    id="stock"
                    name=""
                    type="text"
                    value={unitSold}
                    className={Styles.productinput1}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className={Styles.div2}>
            <div className={Styles.imgdiv}>
              <img
                src="https://images.pexels.com/photos/459947/pexels-photo-459947.jpeg?h=350&auto=compress&cs=tinysrgb"
                alt="Product image"
                class="img-fluid d-block mx-auto"
              />
              <i
                class="fas fa-cloud-upload-alt tm-upload-icon"
                onclick="document.getElementById('fileInput').click();"
              ></i>
            </div>
            <div className={Styles.div2sub}>
              <input id="fileInput" type="file" />
              <input
                type="button"
                className={Styles.btn1}
                value="CHANGE IMAGE NOW"
                onclick="document.getElementById('fileInput').click();"
              />
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className={Styles.btn}>
            Update Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productinformations;
