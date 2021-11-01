import { FileTypes } from './types';

const initialState = {
  files: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FileTypes.SET_FILES:
      return { ...state, files: action.payload };
    default:
      return state;
  }
}

export default reducer;
