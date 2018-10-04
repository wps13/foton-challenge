import Login from './Login/Index'
import Register from './Register/Index'
import { createStackNavigator } from 'react-natigation'

const StackNavigator = createStackNavigator({
  Login: Login,
  Register: Register
})

export default {StackNavigator }