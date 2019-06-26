import React from 'react'
import {Text, TouchableWithoutFeedback} from 'react-native'
import {CardSection}from './common'

const ListItem =({employee}) => {
	const {empName} = employee.item

	const styles = {
		titleStyle: {
			fontSize: 18,
			paddingLeft: 15
		}
	}

	console.log(employee)

	return (
		<CardSection>
			<Text style={styles.titleStyle}>{empName}</Text>
		</CardSection>
	)
}

export default ListItem
