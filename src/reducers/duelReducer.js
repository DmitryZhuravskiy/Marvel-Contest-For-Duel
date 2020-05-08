import { CHANGE_CHAMPION } from "../actions/duelAction";

const initialState = {
  champion: "mordo"
};

const duelReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CHAMPION:
      return {
        ...state,
        champion: action.champion
      };

    default:
      return state;
  }
};

export default duelReducer;
