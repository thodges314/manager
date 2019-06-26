import React from 'react'
import {Text, TouchableWithoutFeedback, View} from 'react-native'
import {CardSection}from './common'
import { Actions } from 'react-native-router-flux';

const ListItem =({employee}) => {
	const {empName} = employee.item

	const styles = {
		titleStyle: {
			fontSize: 18,
			paddingLeft: 15
		}
	}

	const onRowPress = () => Actions.employeeCreate({employee: employee.item})
	
	return (
		<TouchableWithoutFeedback onPress={onRowPress}>
			<View>
				<CardSection>
					<Text style={styles.titleStyle}>{empName}</Text>
				</CardSection>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default ListItem
