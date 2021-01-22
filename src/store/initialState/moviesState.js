import { fetchState } from "../actions/constants";

export const moviesState = () => {
  return {
    movies: {},
    error: null,
    fetchState: fetchState.IDLE
  };
}