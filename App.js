import React, {Component} from 'react'
import {Text, View} from 'react-native';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import firebase from 'firebase'
import reducers from './src/reducers'

class App extends Component {
  constructor (props){
    super(props)
    const firebaseConfig = {
      apiKey: "AIzaSyCA6pQwffBqncS9jhgUdyLKlJeNY0dZqhg",
      authDomain: "manager-584e2.firebaseapp.com",
      databaseURL: "https://manager-584e2.firebaseio.com",
      projectId: "manager-584e2",
      storageBucket: "",
      messagingSenderId: "901455544201",
      appId: "1:901455544201:web:0d2abe49a9f89525"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render(){
    return(
      <Provider store={createStore(reducers)}>
        <View>
          <Text>hello</Text>
        </View>
      </Provider>
    )
  }
} 

export default App