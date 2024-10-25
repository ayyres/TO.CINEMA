import {
  Populer,
  now_playing,
  top_rating,
  up_coming,
} from "../action/movieAction";

const nilaiDefault = {
  Populer: {},
  now_playing: {},
  top_rating: {},
  up_coming: {},
};

const movieReducer = (state = nilaiDefault, action) => {
  switch (action.type) {
    case Populer:
      return {
        ...state,
        Populer: action.data,
      };
    case now_playing:
      return {
        ...state,
        now_playing: action.data,
      };
    case top_rating:
      return {
        ...state,
        top_rating: action.data,
      };
    case up_coming:
      return {
        ...state,
        up_coming: action.data,
      };
    default:
      return state;
  }
};

export default movieReducer;
