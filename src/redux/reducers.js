//Create Reducer to Update Starred Algs
const initState = [];
export const stars = (state = initState, { type, payload }) => {
  switch (type) {
    case "ADD":
      return [...state, payload];
    case "REMOVE":
      return state.filter((star) => star !== payload);
    case "UPDATE":
      return payload;
    default:
      return state;
  }
};
