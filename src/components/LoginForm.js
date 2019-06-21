import React, {Component} from 'react'
import {Button, Card, CardSection, Input} from './common'

class LoginForm extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="eMail"
						placeholder="user@email.com"
					/>
				</CardSection>
				<CardSection>
					<Input
						label="password"
						placeholder="password"
						secureTextEntry
					/>
				</CardSection>
				<CardSection>
					<Button>
						login
					</Button>
				</CardSection>
			</Card>
		)
	}
}

export default LoginForm