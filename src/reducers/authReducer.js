import {EMAIL_CHANGED, LOGIN_USER_SUCCESS, PASSWORD_CHANGED} from '../constants/types'

const INITIAL_STATE = {email: '', password: ''}
export default (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return {...state, email: action.payload}
		case LOGIN_USER_SUCCESS:
			console.log(action)
			return{...state, user: action.payload}
		case PASSWORD_CHANGED:
			return {...state, password: action.payload}
		default:
			return state
	}
}