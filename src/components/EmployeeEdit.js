import React, {Component} from 'react'
import {connect} from 'react-redux'
import Communications from 'react-native-communications'
import {Button, Card, CardSection, Confirm} from './common'
import EmployeeForm from './EmployeeForm'
import {employeeSave, employeeSet, employeeUpdate} from '../actions'

class EmployeeEdit extends Component {
	constructor(props) {
		super(props)
		this.state={showModal: false}
		const {employee, employeeSet} = props
		employeeSet(employee)
	}

	onAccept = () => {

	}

	onButtonPress = () => {
		const {employeeSave, empName, shift, telephoneNumber} = this.props
		const {uid} = this.props.employee
		employeeSave({empName, shift, telephoneNumber, uid})
	}

	onSackEmployeePress = (prevState) => {
		this.setState({showModal: !this.state.showModal})
	}

	onSmsPress = () => {
		const {telephoneNumber, shift} =  this.props
		Communications.text(telephoneNumber, `Your upcoming shift is on ${shift}.`)
	}

	render() {
		const {showModal} = this.state
		const {onAccept, onButtonPress, onSackEmployeePress, onSmsPress} = this
		return(
			<Card>
				<EmployeeForm {...this.props}/>
				<CardSection>
					<Button onPress={onButtonPress}>
						Save Changes
					</Button>
				</CardSection>
				<CardSection>
					<Button onPress={onSmsPress}>
						SMS Employee
					</Button>
				</CardSection>
				<CardSection>
					<Button onPress={onSackEmployeePress}>
						Sack Employee
					</Button>
				</CardSection>
				<Confirm
					onAccept={onAccept}
					onDecline={onSackEmployeePress}
					visible={showModal}
				>
					Are you sure that you want to sack this employee?
				</Confirm>
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