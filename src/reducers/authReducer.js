import {EMAIL_CHANGED, LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, PASSWORD_CHANGED} from '../constants/types'

const INITIAL_STATE = {email: '', error: '', loading: false, password: '', user: null}
export default (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return {...state, email: action.payload}
		case LOGIN_USER:
			return {...state, loading: true, error: ''}
		case LOGIN_USER_FAIL:
			return {...state, error: 'LOGIN FAILED!!', loading: false, password: ''}
		case LOGIN_USER_SUCCESS:
			return{
				...state,
				...INITIAL_STATE,
				user: action.payload}
		case PASSWORD_CHANGED:
			return {...state, password: action.payload}
		default:
			return state
	}
}