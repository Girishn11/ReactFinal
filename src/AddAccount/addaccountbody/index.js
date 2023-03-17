import React, { useEffect, useState } from "react";
import { FaCloudDownloadAlt, FaCloudUploadAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Styles from "./aaccount.module.css";

export const Addaccountmain = () => {
  const navigate = useNavigate();
  const API = JSON.parse(localStorage.getItem("API"));

  const [addp, setAddp] = useState({
    name: "",
    description: "",
    category: "",
    expireDate: "",
    stock: "",
    unitSold: "0",
    productImg: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onproducthand = (e) => {
    let { name, value } = e.target;
    if (name === "productImg") {
      let img = window.URL.createObjectURL(e.target.files[0]);
      value = img;
    }
    const newObj = { ...addp, [name]: value };
    setAddp(newObj);
  };
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (
      addp.name !== "" &&
      addp.description !== "" &&
      addp.expireDate !== "" &&
      addp.stock !== "" &&
      addp.unit !== "" &&
      addp.category !== ""
    ) {
      API.productsPage.products.push(addp);
      localStorage.setItem("API", JSON.stringify(API));
      navigate("/product");
    }
  };

  return (
    <div>
      <div className={Styles.main}>
        <div className={Styles.container}>
          <div className={Styles.contflex}>
            <div className={Styles.maincont}>
              <div className={Styles.hdiv}>
                <h2 className={Styles.htag}>Add Product</h2>
              </div>
              <div className={Styles.formsdiv}>
                <form>
                  <div>
                    <label for="name" className={Styles.formslab}>
                      Product Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={Styles.formsinp}
                      onChange={onproducthand}
                      value={addp.name}
                      required=""
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label for="description" className={Styles.formslab}>
                      Description
                    </label>
                    <textarea
                      id="description"
                      className={Styles.formsinp1}
                      rows="3"
                      required=""
                      onChange={onproducthand}
                      value={addp.description}
                      name="description"
                    ></textarea>
                  </div>
                  <div class="form-group mb-3">
                    <label for="category" className={Styles.formslab}>
                      Category
                    </label>
                    <select
                      className={Styles.customs}
                      id="category"
                      onChange={onproducthand}
                      value={addp.category}
                      name="category"
                    >
                      <option value="">Select category</option>
                      <option value="New Arrival">New Arrival</option>
                      <option value="Most Popular">Most Popular</option>
                      <option value="Trending">Trending</option>
                    </select>
                  </div>
                  <div className={Styles.row}>
                    <div className={Styles.inpdiv}>
                      <label for="expire_date" className={Styles.formslab1}>
                        Expire Date
                      </label>
                      <input
                        id="expire_date"
                        name="expireDate"
                        type="date"
                        className={Styles.formsinp2}
                        data-large-mode="true"
                        onChange={onproducthand}
                        value={addp.expireDate}
                      />
                    </div>
                    <div className={Styles.inpdiv}>
                      <label for="stock" className={Styles.formslab1}>
                        Units In Stock
                      </label>
                      <input
                        id="stock"
                        name="stock"
                        type="text"
                        className={Styles.formsinp2}
                        required=""
                        onChange={onproducthand}
                        value={addp.stock}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className={Styles.secondcont}>
              <div>
                <div className={Styles.seconddiv1}>
                  {/* <i
                    class="fas fa-cloud-upload-alt tm-upload-icon"
                    onclick="document.getElementById('fileInput').click();"
                  ></i> */}
                  <img src={addp.productImg} alt="" />
                  <lable for="img1">
                    <span>
                      <FaCloudUploadAlt />
                    </span>
                  </lable>
                  <input
                    id="img1"
                    type="file"
                    className={Styles.inputload}
                    accept="image/jpg,image/jpeg,image/png"
                    name="productImg"
                    onChange={onproducthand}
                  />
                </div>

                <div className={Styles.customfile}>
                  <input
                    type="button"
                    className={Styles.btn}
                    value="UPLOAD PRODUCT IMAGE"
                    accept="image/*"
                    name="productImg"
                    onChange={onproducthand}
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className={Styles.btn1}
            onClick={handleAddProduct}
          >
            ADD PRODUCT NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addaccountmain;
