import React, {Component} from 'react'
import {connect} from 'react-redux'
import {FlatList} from 'react-native'
import map from 'lodash/map'
import {employeesFetch} from '../actions'
import ListItem from './ListItem'

class EmployeeList extends Component{
	componentDidMount() {
		const {employeesFetch} = this.props
		employeesFetch()
	}

	renderItem = (employee) => <ListItem employee={employee} />

	
	render() {
		const {employees} = this.props
		const {renderItem} = this
		console.log(employees)
		return <FlatList data={employees} renderItem={renderItem} keyExtractor={(employee, index) => index.toString()} />
	}
}

const mapStateToProps = (state) => {
	const employees = map(state.employees, (val, uid) => {return {...val, uid}})
	return {employees}
}

export default connect(mapStateToProps, {employeesFetch})(EmployeeList)
