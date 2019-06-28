import {EMPLOYEE_CREATE, EMPLOYEE_SET, EMPLOYEE_UPDATE} from '../constants/types/'

const INITIAL_STATE={
	empName: '',
	shift: '',
	telephoneNumber: ''
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case EMPLOYEE_CREATE:
			return INITIAL_STATE
		case EMPLOYEE_SET:
			return {...action.payload}
		case EMPLOYEE_UPDATE:
			//action.payload === {prop: 'name', value: 'jane'}
			return {...state, [action.payload.prop]: action.payload.value}	// key interpolation
		default:
			return state
	}
}