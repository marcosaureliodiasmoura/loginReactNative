// https://blog.rocketseat.com.br/react-navigation-react-native/

import { createStackNavigator, createAppContainer } from "react-navigation";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Main from "./pages/main";

const Routes = createAppContainer(
  createStackNavigator({
    Home: Main,
    About: SignIn
  })
);

export default Routes;
