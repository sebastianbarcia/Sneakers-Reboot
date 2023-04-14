import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Form from '../components/Form';
import ShowSneakerItem from '../screens/ShowSneakerItem';
import TypeUser from '../screens/TypeUser';
import UserKmLimit from '../screens/UserKmLimit';
import UserProfile from '../screens/UserProfile';
import ImageSelector from '../screens/ImageSelector';
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getShoes } from "../store/actions/shoesUserList.action";
const Stack = createNativeStackNavigator();

const UserShoeNavigator = () => {

  const list = useSelector((state) => state.list.list);
  
  console.log(list)
  /** ERROR EN LIST */
  // me aparecen dos resultados. y no se si es por eso que no esta renderizando 
  //en el caso de que list sea undefined que el initialName sea "Form" y al 
  //reves en el caso de que haya akgun elemento dentro de list
  
    return(
        <Stack.Navigator initialRouteName={(list === undefined) ? "Form" : "userProfile"} 
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