import { fetchState, movieActions } from "../actions/constants";
import { moviesState } from "../initialState/moviesState";

const {
  FETCH_MOVIES_PENDING,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
} = movieActions

export const moviesReducer = (state = moviesState(), action) => {
  switch (action.type) {
    case FETCH_MOVIES_PENDING:
      return {
        ...state,
        movies: {},
        fetchState: fetchState.PENDING
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        fetchState: fetchState.SUCCESS
      };

    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        error: action.error,
        fetchState: fetchState.FAILURE
      };

    default:
      return state;
  }
};

export const getMoviesList = state => state.moviesState.movies
export const getMoviesError = state => state.moviesState.error
export const getMoviesFetchState = state => state.moviesState.fetchState

