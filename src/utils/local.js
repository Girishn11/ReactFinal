import { redirect } from "react-router-dom";

const getlsvalue = (key) => {
  const value = localStorage.getItem(key);
  return value;
};

const setlsvalue = (key, value) => {
  const stringifyValue = typeof value !== "object" ? value : value;
  localStorage.setItem(key, stringifyValue);
};

const isAuth = ({ isProtected }) => {
  const userInfo = getlsvalue("user");
  if (isProtected) {
    if (!userInfo) {
      return null;
    } else {
      return redirect("/dashboard");
    }
  }
  if (userInfo) {
    return null;
  } else {
    return redirect("/");
  }
};
export { getlsvalue, setlsvalue, isAuth };
