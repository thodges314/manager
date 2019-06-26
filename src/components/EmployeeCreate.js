import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Picker, StyleSheet, Text, View} from 'react-native'
import {employeeCreate, employeeUpdate} from '../actions'
import {Card, CardSection, Input, Button} from './common'

class EmployeeCreate extends Component {
	onButtonPress = () => {
		const {employeeCreate, empName, shift, telephoneNumber} = this.props
		employeeCreate({empName: (empName || 'Jane'), shift: (shift || 'Monday'), telephoneNumber:(telephoneNumber || '(###)###-####')})
	}
	render () {
		const {employeeUpdate, empName, shift, telephoneNumber} = this.props
		const {onButtonPress} = this
		console.log(this.props.employee)
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
							<Picker.Item label='Monday' value='Monday' />
							<Picker.Item label='Tuesday' value='Tuesday' />
							<Picker.Item label='Wednesday' value='Wednesday' />
							<Picker.Item label='Thursday' value='Thursday' />
							<Picker.Item label='Friday' value='Friday' />
							<Picker.Item label='Saturday' value='Saturday' />
							<Picker.Item label='Sunday' value='Sunday' />
						</Picker>
					</View>
				</CardSection>
				<CardSection>
					<Button onPress={onButtonPress}>create</Button>
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

const mapDispatchToProps = {
	employeeCreate,
	employeeUpdate
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate)