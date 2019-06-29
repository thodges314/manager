import React from 'react'
import {Modal, Text, View} from 'react-native'
import {Button} from './Button'
import {CardSection} from './CardSection'

const Confirm = ({
	children,
	onAccept,
	onDecline,
	visible
}) =>{
	return (
		<Modal
			animationType='slide'
			onRequestClose={()=>{}}
			transparent
			visible={visible}
		>
			<View>
				<CardSection>
					<Text>{children}</Text>
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
	CardSection:{
		justifyContent: 'center'
	},
	Text: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40
	},
	Modal:{
		backgroundColor: 'rgba(0,0,0,0.75)'
	}
})

export {Confirm}