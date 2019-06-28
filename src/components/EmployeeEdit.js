import React, {Component} from 'react'
import {connect} from 'react-redux'
import Communications from 'react-native-communications'
import {Card, CardSection, Button} from './common'
import EmployeeForm from './EmployeeForm'
import {employeeSave, employeeSet, employeeUpdate} from '../actions'

class EmployeeEdit extends Component {
	constructor(props) {
		super(props)
		const {employee, employeeSet} = props
		employeeSet(employee)
		console.log(this.props)
	}

	onButtonPress = () => {
		const {employeeSave, empName, shift, telephoneNumber} = this.props
		const {uid} = this.props.employee
		employeeSave({empName, shift, telephoneNumber, uid})
	}

	onSmsPress = () => {
		const {telephoneNumber, shift} =  this.props
		Communications.text(telephoneNumber, `Your upcoming shift is on ${shift}.`)
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
				<CardSection>
					<Button onPress={this.onSmsPress}>
						SMS Employee
					</Button>
				</CardSection>
				<CardSection>
					<Button onPress={() => null}>
						Sack Employee
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

const mapDispatchToProps = {
	employeeSave,
	employeeSet,
	employeeUpdate
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeEdit)