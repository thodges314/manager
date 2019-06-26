import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Picker, StyleSheet, Text, View} from 'react-native'
import {employeeUpdate} from '../actions'
import {Card, CardSection, Input, Button} from './common'

class EmployeeCreate extends Component {
	render () {
		const {employeeUpdate, empName, shift, telephoneNumber} = this.props
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
				<CardSection style={{padding: 13}}>
					<Text style={styles.pickerTextStyle}>Shift</Text>
					<View style={{flex: 2, paddingLeft:85}}>
						<Picker
							selectedValue={shift}
							style={{flex: 1}}
							onValueChange={value => employeeUpdate({prop: 'shift', value})}
						>
							<Picker.item label="Monday" value="Monday" />
							<Picker.item label="Tuesday" value="Tuesday" />
							<Picker.item label="Wednesday" value="Wednesday" />
							<Picker.item label="Thursday" value="Thursday" />
							<Picker.item label="Friday" value="Friday" />
							<Picker.item label="Saturday" value="Saturday" />
							<Picker.item label="Sunday" value="Sunday" />
						</Picker>
					</View>
				</CardSection>
				<CardSection>
					<Button>create</Button>
				</CardSection>
			</Card>
		)
	}
}

const styles = StyleSheet.create({
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20
	}
})

const mapStateToProps = (state) => {
	const{empName, telephoneNumber, shift} = state.employeeForm
	return {empName, telephoneNumber, shift}
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate)