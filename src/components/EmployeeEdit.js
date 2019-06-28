import React, {Component} from 'react'
import {connect} from 'react-redux'
import forEach from 'lodash/forEach'
import {Card, CardSection, Button} from './common'
import EmployeeForm from './EmployeeForm'
import {employeeSet, employeeUpdate} from '../actions'

class EmployeeEdit extends Component {
	constructor(props) {
		super(props)
		const {employee, employeeSet} = props
		// forEach(employee, (value, prop) => employeeUpdate({prop, value}))
		employeeSet(employee)
	}

	onButtonPress= () => {
		const {empName, shift, telephoneNumber} = this.props.employee
	}

	render() {
		return(
			<Card>
				<EmployeeForm {...this.props}/>
				<CardSection>
					<Button onPress={this.onButtonPress}>
						Save Changes
					</Button>
				</CardSection>
			</Card>
		)
	}	
}

const mapStateToProps = state =>{
	const {empName, shift, telephoneNumber}= state.employeeForm
	return {empName, shift, telephoneNumber}
}

export default connect(mapStateToProps, {employeeSet, employeeUpdate})(EmployeeEdit)