import firebase from 'firebase'
import {EMPLOYEE_CREATE, EMPLOYEE_UPDATE} from '../constants/types'
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
