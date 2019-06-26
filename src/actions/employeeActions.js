import firebase from 'firebase'
import {EMPLOYEE_UPDATE} from '../constants/types'

export const employeeUpdate = ({prop, value}) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: {prop, value}
	}
}

export const employeeCreate = ({empName, shift, telephoneNumber})=> {
	const {currentUser} = firebase.auth()
	firebase.database().ref(`/users/${currentUser.uid}/employees`).push({empName, shift, telephoneNumber})
}
