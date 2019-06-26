import firebase from 'firebase'
import {EMPLOYEE_CREATE, EMPLOYEE_UPDATE, EMPLOYEES_FETCH_SUCCESS} from '../constants/types'
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: {prop, value}
	}
}

export const employeeCreate = ({empName, shift, telephoneNumber})=> {
	const {currentUser} = firebase.auth()
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/employees`).push({empName, shift, telephoneNumber})
		.then(() => {
			dispatch({type: EMPLOYEE_CREATE})
			Actions.employeeList({type: 'reset'})
		})
	}
}

export const employeesFetch = () => {
	const {currentUser} = firebase.auth()
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/employees`)	// this will always automatically update when data updates remotely
			.on('value', snapshot => {
				dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()})
			})
	}
}
