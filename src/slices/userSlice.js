import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const api = axios.create({
    baseURL : "http://127.0.0.1:8000",
    headers : {
        "Content-Type" : "application/json",
    },
})

export const userSlice = createAsyncThunk("users/userSlice", async () => { // 바꾸는곳 async (변수 쓰려면) => 
    const response = await api.get(`/user/`);// 바꾸는곳
    console.log("response.data", response.data);
    return response.data;
  });