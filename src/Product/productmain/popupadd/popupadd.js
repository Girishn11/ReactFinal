// import React, { useState, useEffect } from "react";
// import styles from "./popupadd.module.css";

// const getcateLS = () => {
//   const data1 = localStorage.getItem("categories1");
//   if (data1) {
//     return JSON.parse(data1);
//   } else {
//     return [];
//   }
// };

// function Popup(props) {
//   const [usercat, setUsercat] = useState(getcateLS());
//   const [pcategory, setPcategory] = useState("");

//   const handleChange = (e) => {
//     if (!pcategory) {
//       alert("please enter the category name");
//     } else {
//       let addcategory = {
//         pcategory,
//       };
//       setUsercat([...usercat, addcategory]);
//       setPcategory("");
//     }
//   };
//   const onclose = (e) => {
//     props.Close({ isopen: false, name: "" });
//   };
//   useEffect(() => {
//     localStorage.setItem("categories1", JSON.stringify(usercat));
//   }, [usercat]);
//   console.log(usercat);
//   return (
//     <form className={styles.popform} onSubmit={handleChange}>
//       <div>
//         <label for="name" className={styles.label}>
//           Add Category
//         </label>
//         <input
//           type=""
//           id="name"
//           onChange={(e) => setPcategory(e.target.value)}
//           required=""
//           className={styles.input}
//         ></input>
//       </div>
//       <div>
//         <button className={styles.btn} onClick={(e) => onsubmit(e)}>
//           Add
//         </button>
//         <button className={styles.btn} onClick={(e) => onclose(e)}>
//           Close
//         </button>
//       </div>
//     </form>
//   );
// }
// export default Popup;
