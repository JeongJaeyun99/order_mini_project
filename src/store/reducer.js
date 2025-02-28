// Redux Store Configuration (reducer.js)
import { configureStore } from "@reduxjs/toolkit";
import userList from "../services/userService"
import userDelete from "../services/userDeleteService"

const reducer = configureStore({
  reducer: {
    userList,
    userDelete // 유저 전체 받아오기
  },
});

export default reducer;
