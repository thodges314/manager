import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text, View} from 'react-native'
import {emailChanged, loginUser, passwordChanged} from '../actions'
import {Button, Card, CardSection, Input, Spinner} from './common'

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

	renderButton() {
		if (this.props.loading) {
			return <Spinner /> 
		}
		return (
			<Button
				onPress={this.onButtonPress}
			>
				login
			</Button>
		)
	}

	renderError() {
		if (this.props.error) {
			return <View style = {{backgroundColor: 'white'}}>
				<Text style={styles.errorTextStyle}>
					{this.props.error}
				</Text>
			</View>
		}
	}

	render() {
		const {placeholderEmail, placeholderPassword} = this.state
		const {email, error, password} = this.props
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
						label='password'
						obfuscate
						onChangeText={this.onPasswordChange}
						onFocus={()=>this.setState({placeholderPassword: ''})}
						placeholder={placeholderPassword}
						value={password}
					/>
				</CardSection>
				{this.renderError()}
				<CardSection>

					{this.renderButton()}
				</CardSection>
			</Card>
		)
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
}

const mapStateToProps = state =>  ({
	email: state.auth.email,
	error: state.auth.error,
	loading: state.auth.loading,
	password: state.auth.password
})

const mapDispatchToProps = {
	emailChanged,
	loginUser,
	passwordChanged
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)