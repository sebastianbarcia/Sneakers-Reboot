import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Form from '../components/Form';
import ShowSneakerItem from '../screens/ShowSneakerItem';


import TypeUser from '../screens/TypeUser';
import UserKmLimit from '../screens/UserKmLimit';
import UserProfile from '../screens/UserProfile';
import ImageSelector from '../screens/ImageSelector';
const Stack = createNativeStackNavigator();

const UserShoeNavigator = () => {
    return(
        <Stack.Navigator initialRouteName={"userProfile"} 
        // screenOptions={{
       
        // }}
      >
        
        <Stack.Screen
          name="Form"
          component={Form}
           options={{
            headerShown:false
           }}
        />
         <Stack.Screen
          name="Products"
          component={TypeUser}
          options={({ route }) => ({ title: `${route.params.shoesUser.name} ${route.params.shoesUser.brand}`})}
        />
        <Stack.Screen
          name="UserKm"
          component={UserKmLimit} 
          options={({ route }) => ({ title: `${route.params.selected.name} ${route.params.selected.brand}`})}
          /> 
      
         <Stack.Screen
          name="userProfile"
          component={UserProfile} 
          options={{headerBackVisible:false}}
          /> 
           <Stack.Screen
          name="sneakerItem"
          component={ShowSneakerItem} 
          
          /> 
           <Stack.Screen
          name="picShot"
          component={ImageSelector} 
         
          /> 
      </Stack.Navigator>
    )
}

export default UserShoeNavigator