import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiData } from "./api";

const initialState = {
  repositories: [],
  indexRepository: 0,
  currentRepository: null,
};

export const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setRepositories: (state, action) => {
      state.repositories = action.payload;
    },
    increaseIndexRepository: (state, action: { payload: number }) => {
      if (action.payload === 29) {
        state.indexRepository = 0;
      } else {
        state.indexRepository += 1;
      }
    },
    decreaseIndexRepository: (state, action: { payload: number }) => {
      if (action.payload === 0) {
        state.indexRepository = 29;
      } else {
        state.indexRepository -= 1;
      }
    },
    setCurrentRepository: (state, action) => {
      state.currentRepository = action.payload;
    },
  },
});

export const {
  setRepositories,
  increaseIndexRepository,
  decreaseIndexRepository,
  setCurrentRepository,
} = repositoriesSlice.actions;
export const reducer = repositoriesSlice.reducer;

export const fetchRepositories = createAsyncThunk(
  "api/getRepositories",
  async (_, thunkAPI) => {
    const repositories = await apiData();

    if (repositories) {
      thunkAPI.dispatch(setRepositories(repositories));
    }
  },
);
