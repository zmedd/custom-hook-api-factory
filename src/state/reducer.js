import { ACTION_TYPES } from "./types";

export function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return { count: state.count + 1 };
    case ACTION_TYPES.DECREMENT:
      return { count: state.count - 1 };
    case ACTION_TYPES.TIMES_TWO:
      return { count: state.count * 2 };
    default:
      return state;
  }
}
