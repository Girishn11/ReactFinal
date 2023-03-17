import React, { useState } from "react";
import Styles from "./style.module.css";
//import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

//import Popup from "./popupadd/popupadd";

const Productmain = () => {
  const [popupadd, setPopupadd] = useState({
    isopen: false,
  });

  const apicall = JSON.parse(localStorage.getItem("API"));
  const [products, setProducts] = useState(apicall.productsPage.products);
  const [myArr, setMyArr] = useState(apicall.productsPage.categories);
  const [categoryName, setCategoryName] = useState("");
  const onDeleteuser = (e, index) => {
    const dataRow = products.filter((item, del) => del !== index);

    setProducts(dataRow);
    apicall.productsPage.products = dataRow;
    localStorage.setItem("products", JSON.stringify(apicall));
  };

  const onDeletecategory = (e, index) => {
    const newcategory = myArr.filter((item, del) => del !== index);

    setMyArr(newcategory);
    apicall.productsPage.categories = newcategory;
    localStorage.setItem("apicall", JSON.stringify(apicall));
    // console.log(category);
  };

  let newArr = [];
  const onchnageHandler = (e, index) => {
    if (e.target.checked) {
      newArr.push(products[index]);
      // console.log(newArr)
    }
    if (!e.target.checked) {
      const findIndex = newArr.indexOf(products[index]);
      newArr.splice(findIndex, 1);
      // console.log(newArr)
    }
  };
  const checkboxDelete = () => {
    const filterArr = products.filter((element) => !newArr.includes(element));
    setProducts(filterArr);
    apicall.productsPage.products = filterArr;
    localStorage.setItem("products", JSON.stringify(apicall));
    newArr = [];
  };

  const { productsPage } = apicall || {};

  if (!productsPage) {
    return <h1>Loading...</h1>;
  }

  const addNewcategory = (e) => {
    setCategoryName(e.target.value);
  };
  const addcategory = (e) => {
    e.preventDefault();
    // if (categoryName == "") {
    //   alert("please enter the category name");}
    if (categoryName !== "") {
      myArr.push(categoryName);
      apicall.productsPage.categories = myArr;
      localStorage.setItem("apicall", JSON.stringify(apicall));
      setCategoryName("");
    }
  };

  return (
    <div className={Styles.maindiv}>
      <div className={Styles.maindiv1}>
        <div className={Styles.section1}>
          <div className={Styles.section1sub}>
            <table className={Styles.table}>
              <thead className={Styles.thead}>
                <tr className={Styles.tabletr}>
                  <th scope="col">&nbsp;</th>
                  <th scope="col">PRODUCT NAME</th>
                  <th scope="col">UNIT SOLD</th>
                  <th scope="col">IN STOCK</th>
                  <th scope="col">EXPIRE DATE</th>
                  <th scope="col">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => {
                  return (
                    <tr className={Styles.bodytr} key={index}>
                      <th>
                        <input
                          type="checkbox"
                          className={Styles.checkbox}
                          onChange={(e) => onchnageHandler(e, index)}
                        />
                      </th>

                      <td className={Styles.td1}>
                        {" "}
                        <Link
                          to={`/productinfo/${item.name}`}
                          className={Styles.linktag}
                        >
                          {item.name}
                        </Link>
                      </td>

                      <td>{item.unitSold}</td>
                      <td>{item.stock}</td>
                      <td>{item.expireDate}</td>
                      <td>
                        <FaTrashAlt
                          className={Styles.deleteicon}
                          onClick={(e) => onDeleteuser(e, index)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Link to="/addaccount">
            <input className={Styles.btn} value="ADD NEW ACCOUNT"></input>
          </Link>
          <input
            className={Styles.btn2}
            value="DELETED SELECTED ACCOUNTS"
            onClick={() => checkboxDelete()}
          ></input>
        </div>

        <div className={Styles.section2}>
          <div>
            <h3 className={Styles.h3}> Product Categories</h3>

            <div className={Styles.seccont}>
              <table className={Styles.table}>
                <tbody>
                  {myArr.map((item, index) => {
                    return (
                      <tr key={index} className={Styles.bodytrs}>
                        <td>{item}</td>
                        <td>
                          <FaTrashAlt
                            className={Styles.deleteicon}
                            onClick={(e) => onDeletecategory(e, index)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <input
            onClick={() => setPopupadd({ isopen: true })}
            className={Styles.btn1}
            value="ADD NEW CATEGORY"
          ></input>
        </div>
      </div>

      {popupadd.isopen ? (
        <form className={Styles.cpopform}>
          <div>
            <label for="name" className={Styles.clabel}>
              Add Category
            </label>
            <input
              type=""
              id="name"
              onChange={(e) => addNewcategory(e)}
              required=""
              className={Styles.cinput}
            ></input>
          </div>
          <div>
            <button
              type="submit"
              className={Styles.cbtn}
              onClick={(e) => addcategory(e)}
            >
              Add
            </button>
            <button
              className={Styles.cbtn}
              onClick={() => setPopupadd({ isopen: false })}
            >
              Close
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default Productmain;
