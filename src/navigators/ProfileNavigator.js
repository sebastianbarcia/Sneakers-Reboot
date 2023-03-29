import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Form from '../components/Form';

import TypeUser from '../screens/TypeUser';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Form"
        screenOptions={{
        //  headerShown:false
        //   headerStyle: {
        //     backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
        //   },
        //  headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
        //   headerTitleStyle: {
        //     fontFamily: 'OpenSans_700Bold'
        //   }
        }}
      >
        <Stack.Screen
          name="Form"
          component={Form}
           options={{
            headerShown:false,
           }}
        />
        <Stack.Screen
          name="Products"
          component={TypeUser}
          options={({ route }) => ({ title: `${route.params.shoesUser.name} ${route.params.shoesUser.brand}`})}

        />
        {/* 
        <Stack.Screen
          name="Detail"
          component={BreadDetailScreen} 
          /> */}
      </Stack.Navigator>
    )
}

export default ProfileNavigator