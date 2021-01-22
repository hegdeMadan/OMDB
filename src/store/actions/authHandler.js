import { authenticationFailed, signInSuccess, authenticationPending, signOutSuccess } from "./authAction"

export const signIn = (data) => {
  return dispatch => {
    dispatch(authenticationPending())
    
    if (data && data.email === 'test@user.com' && data.password === 'qwerty') {
      dispatch(signInSuccess(data))
      return
    }
    dispatch(authenticationFailed('wrong email or password!'))
  }
}

export const signOut = () => {
  return dispatch => dispatch(signOutSuccess())
}



