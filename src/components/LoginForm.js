import React, {Component} from 'react'
import {connect} from 'react-redux'
import {emailChanged, passwordChanged} from '../actions'
import {Button, Card, CardSection, Input} from './common'

class LoginForm extends Component {
	state={
		placeholderEmail: 'user@email.com',
		placeholderPassword: 'password'
	}

	onEmailChange = (text) => {
		const {emailChanged} = this.props
		emailChanged(text)
	}

	onPasswordChange = (text) => {
		const {passwordChanged} = this.props
		passwordChanged(text)
	}

	render() {
		const {placeholderEmail, placeholderPassword} = this.state
		const {email, password} = this.props
		return (
			<Card>
				<CardSection>
					<Input
						label="eMail"
						onChangeText={this.onEmailChange}
						onFocus={()=>this.setState({placeholderEmail: ''})}
						placeholder={placeholderEmail}
						value={email}
					/>
				</CardSection>
				<CardSection>
					<Input
						label="password"
						onChangeText={this.onPasswordChange}
						onFocus={()=>this.setState({placeholderPassword: ''})}
						placeholder={placeholderPassword}
						secureTextEntry
						value={password}
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

const mapStateToProps =state =>  ({
	email: state.auth.email,
	password: state.auth.password
})

const mapDispatchToProps = {
	emailChanged,
	passwordChanged
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)