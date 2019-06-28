import firebase from 'firebase'
import {EMPLOYEE_CREATE, EMPLOYEE_SAVE_SUCCESS, EMPLOYEE_SET, EMPLOYEE_UPDATE, EMPLOYEES_FETCH_SUCCESS} from '../constants/types'
import { Actions } from 'react-native-router-flux';

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

export const employeeSave = ({empName, shift, telephoneNumber, uid})=> {
	const {currentUser} = firebase.auth()
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`).set({empName, shift, telephoneNumber})
		.then(() => {
			dispatch({type: EMPLOYEE_SAVE_SUCCESS})
			Actions.employeeList({type: 'reset'})
		})
	}
}

export const employeeSet = (employee) => {
	return {
		type: EMPLOYEE_SET,
		payload: employee
	}

}

export const employeeUpdate = ({prop, value}) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: {prop, value}
	}
}