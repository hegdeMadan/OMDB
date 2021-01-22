import { fetchMoviesPending, fetchMoviesSuccess, fetchMoviesFailed } from "./moviesActions"
import axios from 'axios'

export const fetchMovies = () => {
  return dispatch => {
    dispatch(fetchMoviesPending())
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=70b70b8a')
    .then(({ data }) => dispatch(fetchMoviesSuccess(data)))
    .catch(error => dispatch(fetchMoviesFailed(error)))
  }
}
