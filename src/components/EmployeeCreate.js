import React, {Component} from 'react'
import {connect} from 'react-redux'
import {employeeUpdate} from '../actions'
import {Card, CardSection, Input, Button} from './common'

class EmployeeCreate extends Component {
	render () {
		const {employeeUpdate, empName, telephoneNumber} = this.props
		console.log(empName, telephoneNumber)
		return (
			<Card>
				<CardSection>
					<Input
						label='name'
						onChangeText={value => employeeUpdate({prop: 'empName', value})}
						placeholder='Jane'
						value = {empName}
					/>
				</CardSection>
				<CardSection>
					<Input
						label='telephone number'
						onChangeText={value => employeeUpdate({prop: 'telephoneNumber', value})}
						placeholder='(###)###-####'
						value={telephoneNumber}
					/>
				</CardSection>
				<CardSection></CardSection>
				<CardSection>
					<Button>create</Button>
				</CardSection>
			</Card>
		)
	}
}

const mapStateToProps = (state) => {
	const{empName, telephoneNumber, shift} = state.employeeForm
	return {empName, telephoneNumber, shift}
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate)