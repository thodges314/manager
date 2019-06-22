import React, {Component} from 'react'
import {connect} from 'react-redux'
import {emailChanged, loginUser, passwordChanged} from '../actions'
import {Button, Card, CardSection, Input} from './common'

class LoginForm extends Component {
	state={
		placeholderEmail: 'user@email.com',
		placeholderPassword: 'password'
	}

	onButtonPress = () =>{
		const {email, loginUser, password}= this.props
		loginUser({email, password})
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
					<Button
						onPress={this.onButtonPress}
					>
						login
					</Button>
				</CardSection>
			</Card>
		)
	}
}

const mapStateToProps = state =>  ({
	email: state.auth.email,
	password: state.auth.password
})

const mapDispatchToProps = {
	emailChanged,
	loginUser,
	passwordChanged
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)