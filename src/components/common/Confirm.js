import React from 'react'
import {Modal, StyleSheet, Text, View} from 'react-native'
import {Button} from './Button'
import {CardSection} from './CardSection'

const Confirm = ({
	children,
	onAccept,
	onDecline,
	visible
}) => {
	const {cardSectionStyle, containerStyle, textStyle} = styles
	return (
		<Modal
			animationType='slide'
			onRequestClose={()=>{}}
			transparent
			visible={visible}
		>
			<View style={containerStyle}>
				<CardSection style={cardSectionStyle}>
					<Text style={textStyle}>{children}</Text>
				</CardSection>
				<CardSection>
					<Button onPress={onAccept}>Ok</Button>
					<Button onPress={onDecline}>Cancel</Button>
				</CardSection>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	cardSectionStyle:{
		justifyContent: 'center'
	},
	containerStyle: {
		backgroundColor:'rgba(0, 0, 0, 0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40
	}
})

export {Confirm}