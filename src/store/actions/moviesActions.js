import { movieActions } from "./constants"

export const fetchMoviesPending = () => {
	return {
    type: movieActions.FETCH_MOVIES_PENDING
  }
}

export const fetchMoviesSuccess = data => {
  return {
    type: movieActions.FETCH_MOVIES_SUCCESS,
    payload: data
  }
}

export const fetchMoviesFailed = error => {
  return {
    type: movieActions.FETCH_MOVIES_ERROR,
    error
  }
}
