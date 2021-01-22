import { authAction } from "./constants"

export const signOutSuccess = () => {
	return {
    type: authAction.USER_SIGNOUT_SUCCESS
  }
}

export const signInSuccess = data => {
  return {
    type: authAction.USER_SIGNIN_SUCCESS,
    payload: data
  }
}

export const authenticationPending = error => {
  return {
    type: authAction.USER_SIGN_IN_PROGRESS,
    error
  }
}

export const singOutPending = error => {
  return {
    type: authAction.USER_SIGN_IN_PROGRESS,
    error
  }
}

export const authenticationFailed = error => {
  return {
    type: authAction.SIGN_IN_ERROR,
    error
  } 
}
