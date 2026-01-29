import { createAsyncThunk } from "@reduxjs/toolkit";
export const loginUserThunk = createAsyncThunk("user/fetchbyId", async () => {
  console.log("hello");
});
