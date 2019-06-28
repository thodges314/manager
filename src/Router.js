import React from 'react'
import {Scene, Stack, Router, Actions} from 'react-native-router-flux'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'
import EmployeeList from './components/EmployeeList'
import LoginForm from './components/LoginForm'

const RouterComponent = () => {
	return (
		<Router>
			<Stack key='root' hideNavBar>
				<Stack key="auth" initial>
					<Scene key='login' component={LoginForm} title='Please log in.' initial />
				</Stack>
				<Stack key="main">
					<Scene
						key='employeeList'
						component={EmployeeList}
						title='Employees'
						rightTitle='add'
						onRight={()=>Actions.employeeCreate()}
						initial
					/>
					<Scene 
						key='employeeCreate'
						component={EmployeeCreate}
						title='Create Employee'
					/>
					<Scene 
						key='employeeEdit'
						component={EmployeeEdit}
						title='Edit Employee'
					/>
				</Stack>
			</Stack>
		</Router>
	)
}

export default RouterComponent