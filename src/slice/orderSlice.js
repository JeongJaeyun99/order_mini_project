import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const api = axios.create({
    baseURL : "http://127.0.0.1:8000",
    headers : {
        "Content-Type" : "application/json",
    },
})

// 유저 전체 조회
export const orderSlice = createAsyncThunk("orders/orderSlice", async () => { // 바꾸는곳 async (변수 쓰려면) => 
    const response = await api.get(`/order/`);// 바꾸는곳
    console.log("response.data", response.data);
    return response.data;
  });

  // 책 삭제
export const orderDeleteSlice = createAsyncThunk("orders/orderDeleteSlice", async (id) => { // 바꾸는곳 async (변수 쓰려면) => 
    const response = await api.delete(`/order/delete/${id}/`);// 바꾸는곳
    console.log("response.data", response.data);
    return response.data;
});