// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import Axios from "axios";
// import { setlsvalue } from "../utils/local";

// export const getusers = createAsyncThunk("getusers", async () => {
//   return Axios.get(
//     "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json"
//   ).then((res) => {
//     return res.data;
//   });
// });

// const apiData = createSlice({
//   name: "users",
//   initialState: {
//     users: [],
//     filter: "All",
//     user: {
//       name: "",
//       category: "",
//       description: "",
//       expireDate: "",
//       unitSold: "",
//     },
//     loading: false,
//   },
//   extraReducers: {
//     getuser: (state, action) => {
//       state.user = state.getusers.find((item) => item.id == action.payload);
//     },
//     [getusers.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [getusers.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.users = action.payload;
//     },
//     [getusers.rejected]: (state, action) => {
//       state.loading = false;
//     },
//     addUser(state, action) {
//       const newData = { ...action.payload };
//       state.getusers = [newData, ...state.getusers];
//     },

//     deleteUser(state, action) {
//       const ids = action.payload;
//       state.getusers = state.getusers.filter(
//         (item) => !ids.includes(item.productsPage.products.name)
//       );
//     },
//     updateUser: (state, action) => {
//       state.getusers = state.getusers.filter((item) =>
//         item.productsPage.products.name === action.payload.id
//           ? action.payload
//           : item
//       );
//     },
//     callUser: (state, action) => {
//       const callData = { ...action.payload };
//       state.getusers = [callData, ...state.getusers];
//     },
//   },
// });

// export const { deleteUser, getuser, updateUser, addUser } = apiData.actions;
// export default apiData.reducer;
