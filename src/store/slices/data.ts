import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { toast } from "react-toastify";
import axios from "axios";
import { InitialStateData } from "../../types/data";

const name = "data";

const initialState: InitialStateData = {
  data: {},
  loading: false,
  error: false,
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
    builder
      .addCase(getDataThunk.fulfilled, (state, actions) => {
        const data = actions.payload;

        state.data = data;
        state.error = false;
        state.loading = false;
      })
      .addCase(getDataThunk.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getDataThunk.pending, (state) => {
        state.loading = true;
      });
  },
});

export const actionsData = slice.actions;

export const selectorData = (state: RootState) => state.data;

export default slice.reducer;
