import Login from './modules/Auth/components/Login/Index'
import Register from './modules/Auth/components/Register/Index'
import { createStackNavigator } from 'react-natigation'

const StackNavigator = createStackNavigator({
  Login: Login,
  Register: Register
})

export default {StackNavigator }