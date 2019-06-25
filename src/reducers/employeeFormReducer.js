import {EMPLOYEE_UPDATE} from '../constants/types/'

const INITIAL_STATE={}

export default (state = INITIAL_STATE, action) => {
	console.log(action)
	switch(action.type) {
		case EMPLOYEE_UPDATE:
			//action.payload === {prop: 'name', value: 'jane'}
			return {...state, [action.payload.prop]: action.payload.value}	// key interpolation
		default:
			return state
	}
}