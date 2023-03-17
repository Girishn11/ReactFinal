import React, { useEffect } from "react";
import styles from "./style.module.css";
// import { useSelector } from "react-redux";

//import { Latest } from "../Charts/latestchart";
import Barchart from "../Charts/barchart";
import Piechart from "../Charts/piechart";
import Linechart from "../Charts/linechart";
const Sectionone = () => {
  //const { Charts: chartdata } = props;

  // const { users } = useSelector((state) => state.user);
  const apiget = JSON.parse(localStorage.getItem("API"));
  const { dasbhoardPage } = apiget || {};

  const { notifications, orders } = dasbhoardPage || {};
  if (!dasbhoardPage) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className={styles.main}>
      <h3 className={styles.h3}>Welcome Back, Admin</h3>
      {/* {console.log(users)} */}
      <div className={styles.container}>
        <div className={styles.cont1}>
          Latest Hits
          <Linechart />
        </div>
        <div className={styles.cont1}>
          Performance
          <Barchart />
        </div>
        <div className={styles.cont1}>
          {" "}
          Storage Information
          <Piechart />
        </div>
        <div className={styles.cont1}>
          Notifictation List
          <div className={styles.maindiv}>
            {notifications.map((item, index) => {
              return (
                <div className={styles.maindiv2} key={index}>
                  <div className={styles.imgcircle}>
                    <img src={item.pic} alt="useravatar" />
                  </div>

                  <div className={styles.media}>
                    <p className={styles.mb}>{item.message}</p>
                    <span className={styles.time}>
                      {item.time}
                      {" ago"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div></div>
        <div className={styles.cont2}>
          <div className={styles.scroll}>
            Orders List
            <table className={styles.table}>
              <thead className={styles.head}>
                <tr>
                  <th className={styles.th}>ORDER NO</th>
                  <th className={styles.th}>STATUS</th>
                  <th className={styles.th}>OPERATORS</th>
                  <th className={styles.th}>LOCATION</th>
                  <th className={styles.th}>DISTANCE</th>
                  <th className={styles.th}>START DATE</th>{" "}
                  <th className={styles.th}> EST DELIVERY DUE</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item, index) => {
                  return (
                    <tr keys={index}>
                      <td className={styles.ttd1}>{item.orderNo}</td>
                      <td className={styles.ttd}>{item.status}</td>
                      <td className={styles.ttd1}>{item.operators}</td>
                      <td className={styles.ttd1}>{item.location}</td>
                      <td className={styles.ttd1}>{item.distance}</td>
                      <td className={styles.ttd}>{item.startDate}</td>
                      <td className={styles.ttd}>{item.orderNo}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sectionone;
