import React from 'react'
import {Scene, Router} from 'react-native-router-flux'
import EmployeeList from './components/EmployeeList'
import LoginForm from './components/LoginForm'

const RouterComponent = () => {
	return (
		<Router>
			<Scene key='root'>
				<Scene key='login' component={LoginForm} title = 'Please log in.' initial />
				<Scene key='employeeList' component={EmployeeList} title = 'Employees' />
			</Scene>
		</Router>
	)
}

export default RouterComponent