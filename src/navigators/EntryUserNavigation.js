import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "../screens/OnBoarding";
import Register from "../screens/Register";
import ImageSelector from "../screens/ImageSelector";
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
        name="Onboarding"
        component={OnBoarding}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
          name="picShot"
          component={ImageSelector} 
          options={{title:"Introduce tu foto de perfil"}}
          /> 
    </Stack.Navigator>
  );
};
