import React from 'react'
import {Scene, Router, Actions} from 'react-native-router-flux'
import EmployeeCreate from './components/EmployeeCreate'
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
					<Scene
						key='employeeList'
						component={EmployeeList}
						title='Employees'
						rightTitle='add'
						onRight={()=>Actions.employeeCreate()}
					/>
					<Scene 
						key='employeeCreate'
						component={EmployeeCreate}
						title='Create Employee'
					/>
				</Scene>
			</Scene>
		</Router>
	)
}

export default RouterComponent