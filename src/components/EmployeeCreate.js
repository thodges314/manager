import React from 'react'
import {connect} from 'react-redux'
import {employeeCreate, employeeUpdate} from '../actions'
import {Card, CardSection, Button} from './common'
import EmployeeForm from './EmployeeForm';

const EmployeeCreate = ({employeeCreate, empName, shift, telephoneNumber}) => {
	const onButtonPress = () => {
		employeeCreate({empName: (empName || 'Jane'), shift: (shift || 'Monday'), telephoneNumber:(telephoneNumber || '(###)###-####')})
	}
	return (
		<Card>
			<EmployeeForm {...this.props}/>
			<CardSection>
				<Button onPress={onButtonPress}>create</Button>
			</CardSection>
		</Card>
	)
}



const mapStateToProps = (state) => {
	const{empName, telephoneNumber, shift} = state.employeeForm
	return {empName, telephoneNumber, shift}
}

const mapDispatchToProps = {
	employeeCreate,
	employeeUpdate
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate)