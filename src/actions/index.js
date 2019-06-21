export const emailChanged = (text) => {
	return ({
		type: 'email_changed',
		payload: text
	})
}

export const passwordChanged = (text) => {
	return ({
		type: 'password_changed',
		payload: text
	})
}