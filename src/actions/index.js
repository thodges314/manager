import {EMAIL_CHANGED, LOGIN_USER_SUCCESS, PASSWORD_CHANGED} from '../constants/types'
import firebase from 'firebase'

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
	console.log(email, password)
	return (dispatch) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => {
				dispatch({
				type: LOGIN_USER_SUCCESS,
				payload: user
			})})
	}
}