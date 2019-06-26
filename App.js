import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import Router from './src/Router'

class App extends Component {
  constructor (props){
    super(props)
    const firebaseConfig = {
      apiKey: "AIzaSyBo3c5dSXPYEriM_vZQ39plfinjfUjA-4I",
      authDomain: "manager-2-a1995.firebaseapp.com",
      databaseURL: "https://manager-2-a1995.firebaseio.com",
      projectId: "manager-2-a1995",
      storageBucket: "",
      messagingSenderId: "523811968767",
      appId: "1:523811968767:web:c8bed1e6445c0c98"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return(
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
} 

export default App