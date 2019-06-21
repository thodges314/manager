import React, {Component} from 'react'
import {Button, Card, CardSection, Input} from './common'

class LoginForm extends Component {
	state={
		placeholderEmail: 'user@email.com',
		placeholderPassword: 'password'
	}
	render() {
		const {placeholderEmail, placeholderPassword} = this.state
		return (
			<Card>
				<CardSection>
					<Input
						label="eMail"
						onFocus={()=>this.setState({placeholderEmail: ''})}
						placeholder={placeholderEmail}
					/>
				</CardSection>
				<CardSection>
					<Input
						label="password"
						placeholder={placeholderPassword}
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