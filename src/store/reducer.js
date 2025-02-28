// Redux Store Configuration (reducer.js)
import { configureStore } from "@reduxjs/toolkit";
import userList from "../services/userService"
import userDelete from "../services/userDeleteService"
import userFindById from "../services/userFindByIdService"
import userFindByName from "../services/userFindByNameService"
import userFindGteAge from "../services/userFindGteAgeService"

const reducer = configureStore({
  reducer: {
    userList,
    userDelete,
    userFindById,
    userFindByName,
    userFindGteAge, // 유저 전체 받아오기
  },
});

export default reducer;
