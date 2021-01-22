export const authAction = {
  USER_SIGN_IN_PROGRESS: 'USER_SIGN_IN_PROGRESS',
  USER_SIGNIN_SUCCESS: 'USER_SIGN_IN_SUCCESS',
  USER_SIGNOUT_SUCCESS: 'USER_SIGNOUT_SUCCESS',
  SIGN_IN_ERROR: 'SIGN_IN_ERROR',
  SIGN_OUT_ERROR: 'SIGN_OUT_ERROR',
}

export const movieActions = {
  FETCH_MOVIES_PENDING: 'FETCH_MOVIES_PENDING',
  FETCH_MOVIES_SUCCESS: 'FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_ERROR: 'FETCH_MOVIES_ERROR',
}

export const fetchState = {
  IDLE: 0,
  PENDING: 1,
  SUCCESS: 2,
  FAILURE: 3
}