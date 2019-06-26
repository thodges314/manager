import firebase from 'firebase'
import {EMPLOYEE_UPDATE} from '../constants/types'
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: {prop, value}
	}
}

export const employeeCreate = ({empName, shift, telephoneNumber})=> {
	const {currentUser} = firebase.auth()
	return () => {
		firebase.database().ref(`/users/${currentUser.uid}/employees`).push({empName, shift, telephoneNumber})
		.then(() => Actions.employeeList({type: 'reset'}))
	}
}
