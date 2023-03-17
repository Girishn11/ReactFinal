import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import Styles from "./account.module.css";

const Accountmain = () => {
  const [single, setSingle] = useState([]);
  const [profileInfo, setProfileInfo] = useState({
    name: "",
    email: "",
    password: "",
    accountType: "",
    profilePic: null,
  });
  const [profilePicURL, setProfilePicURL] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);
  const apiget = JSON.parse(localStorage.getItem("API"));
  const { accountsPage } = apiget || {};
  console.log(accountsPage && accountsPage[single]);

  if (!accountsPage) {
    return <h1>Loading...</h1>;
  }
  // useEffect(() => {
  //   // Retrieve the profile info from local storage and update the state
  //   const storedProfileInfo = localStorage.getItem("profileInfo");
  //   if (storedProfileInfo) {
  //     setProfileInfo(JSON.parse(storedProfileInfo));
  //   }
  // }, []);
  const onaddchange = (e) => {
    //alert(e.target.value);
    const target = e.target.value;
    console.log(target);
    setSingle(target);
  };

  return (
    <div className={Styles.main}>
      <div className={Styles.firstdiv}>
        <h2 className={Styles.htag}>List of Accounts</h2>
        <p className={Styles.ptag}>Accounts</p>
        <select class={Styles.custom} onChange={onaddchange}>
          <option className={Styles.options}>Select account</option>
          <option className={Styles.options}>Admin</option>
          <option className={Styles.options}>Merchant</option>
          <option className={Styles.options}>Editor</option>
          <option className={Styles.options}>Customer</option>
        </select>
      </div>
      <div className={Styles.seconddiv}>
        <div className={Styles.seconddiv1}>
          <h2 className={Styles.lefth}>Change Avatar</h2>
          <div className={Styles.leftinp}>
            <img
              className={Styles.img}
              src={accountsPage[single] ? accountsPage[single].profilePic : ""}
              alt="Avatar"
            />
            <a href="#" class="tm-avatar-delete-link">
              {/* <i class="far fa-trash-alt tm-product-delete-icon"></i> */}
            </a>
            <label for="img">Upload New Photo</label>
            <input
              id="img"
              type="file"
              style={{ display: "none" }}
              // className={Styles.leftbtn}
            />
          </div>
        </div>
        <div className={Styles.secondiv2}>
          <div className={Styles.secondiv2sub}>
            <h2 className={Styles.lefth}>Account Settings</h2>
            <form action="" className={Styles.form}>
              <div className={Styles.formdiv}>
                <label for="name" className={Styles.lble}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={Styles.forminp}
                  value={accountsPage[single] ? accountsPage[single].name : ""}
                />
              </div>
              <div className={Styles.formdiv}>
                <label for="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={Styles.forminp}
                  value={accountsPage[single] ? accountsPage[single].email : ""}
                />
              </div>
              <div className={Styles.formdiv}>
                <label for="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={
                    accountsPage[single] ? accountsPage[single].password : ""
                  }
                  className={Styles.forminp}
                />
              </div>
              <div className={Styles.formdiv}>
                <label for="password2">Re-enter Password</label>
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  className={Styles.forminp}
                />
              </div>
              <div className={Styles.formdiv}>
                <label for="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={accountsPage[single] ? accountsPage[single].phone : ""}
                  className={Styles.forminp}
                />
              </div>
              <div className={Styles.formdiv}>
                <label>&nbsp;</label>
                <button type="submit" className={Styles.leftbtn}>
                  Update Your Profile
                </button>
              </div>

              <button type="submit" className={Styles.leftbtn1}>
                Delete Your Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountmain;
