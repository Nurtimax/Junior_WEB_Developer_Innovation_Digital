import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { toast } from "react-toastify";
import axios from "axios";
import { InitialStateData } from "../../types/data";

const name = "data";

const initialState: InitialStateData = {
  data: {},
};

export const getDataThunk = createAsyncThunk(
  `${name}/getDataThunk`,
  async () => {
    try {
      const response = await axios.get("https://dpg.gg/test/calendar.json");
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }
);

const slice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDataThunk.fulfilled, (state, actions) => {
      const data = actions.payload;

      state.data = data;
    });
  },
});

export const actionsData = slice.actions;

export const selectorData = (state: RootState) => state.data;

export default slice.reducer;
