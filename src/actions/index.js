import {EMAIL_CHANGED, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, PASSWORD_CHANGED} from '../constants/types'
import firebase from 'firebase'

const loginUserFailed = (dispatch) =>{
	dispatch({type: LOGIN_USER_FAIL})
}

const loginUserSuccess=(dispatch, user)=> {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	})
}

export const emailChanged = (text) => {
	return ({
		type: EMAIL_CHANGED,
		payload: text
	})
}

export const passwordChanged = (text) => {
	return ({
		type: PASSWORD_CHANGED,
		payload: text
	})
}

export const loginUser = ({email, password}) => {
	return (dispatch) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch(()=>{
				firebase.auth().createUserWithEmailAndPassword(email,password)
				.then(user => loginUserSuccess(dispatch, user))
				.catch(() => loginUserFailed(dispatch))
			})
	}
}