import { authAction } from '../actions/constants';
import { authState } from '../initialState/authState';

const {
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT_SUCCESS,
  USER_SIGN_IN_PROGRESS,
  SIGN_IN_ERROR,
  SIGN_OUT_ERROR,
} = authAction;

export const authReducer = (state = authState(), action) => {
  switch (action.type) {
    case USER_SIGNIN_SUCCESS:
      return {
        ...authState(),
        userSignedIn: true,
      };

    case USER_SIGNOUT_SUCCESS:
      return {
        ...state,
        userSignedIn: false,
      };

    case USER_SIGN_IN_PROGRESS:
      return {
        ...authState(),
      };

    case SIGN_IN_ERROR:
    case SIGN_OUT_ERROR:
      return {
        ...state,
        userSignedIn: false,
        signInError: action.error,
      };

    default:
      return state;
  }
};

export const getIsUserSignedIn = state => state.authState.userSignedIn;
export const getAuthError = state => state.authState.signInError;
