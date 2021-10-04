import { FileTypes } from "./types";

export const setFiles = (files) => {
  return {
    type: FileTypes.SET_FILES,
    payload: files
  }
};
