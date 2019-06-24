import React from 'react'
import {Scene, Router} from 'react-native-router-flux'
import EmployeeList from './components/EmployeeList'
import LoginForm from './components/LoginForm'

const RouterComponent = () => {
	return (
		<Router>
			<Scene key='root' hideNavBar>
				<Scene key="auth">
					<Scene key='login' component={LoginForm} title = 'Please log in.' initial />
				</Scene>
				<Scene key="main">
					<Scene key='employeeList' component={EmployeeList} title = 'Employees' />
				</Scene>
			</Scene>
		</Router>
	)
}

export default RouterComponent