import {EMPLOYEE_UPDATE} from '../constants/types'

export const employeeUpdate = ({prop, value}) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: {prop, value}
	}
}

export const employeeCreate = ({empName, shift, telephoneNumber})=> {
	console.log(empName, shift, telephoneNumber)
}
