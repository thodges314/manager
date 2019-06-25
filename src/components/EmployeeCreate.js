import React, {Component} from 'react'
// import {View, Text} from 'react-native'
import{Card, CardSection, Input, Button} from './common'

class EmployeeCreate extends Component {
	render () {
		return (
			<Card>
				<CardSection>
					<Input
						label='name'
						placeholder='Jane'
					/>
				</CardSection>
				<CardSection>
					<Input
						label='telephone number'
						placeholder='(###)###-####'
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

export default EmployeeCreate