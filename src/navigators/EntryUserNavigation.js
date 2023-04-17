import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "../screens/OnBoarding";
import Register from "../screens/Register";
import ImageSelector from "../screens/ImageSelector";
import Login from "../screens/Login";
const Stack = createNativeStackNavigator();

export const EntryUserNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={
        {
          //  headerShown:false
          //   headerStyle: {
          //     backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
          //   },
          //  headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
          //   headerTitleStyle: {
          //     fontFamily: 'OpenSans_700Bold'
          //   }
        }
      }
    >
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnBoarding}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
          name="picShot"
          component={ImageSelector} 
          /> 
    </Stack.Navigator>
  );
};
