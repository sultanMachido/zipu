const initialState = {
  isAuthenticated: false,
  userInfo: {},
  authLoading: false,
  authError: ''
}

export const authReducer = (state=initialState, action) => {
  switch(action.type){
    case 'AUTH_LOADING':
      return {
        ...state,
        authLoading: action.payload,
      }
    default:
      return state;
  }
  
}