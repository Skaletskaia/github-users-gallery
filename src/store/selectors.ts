import { RootState } from "./";

export const getRepositories = (state: RootState) => {
  return state.repositories;
};

export const getIndexRepository = (state: RootState) => {
  return state.indexRepository;
};

export const getCurrentRepository = (state: RootState) => {
  return state.currentRepository;
};
