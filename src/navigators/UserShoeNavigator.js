import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Form from "../components/Form";
import ShowSneakerItem from "../screens/ShowSneakerItem";
import TypeUser from "../screens/TypeUser";
import UserKmLimit from "../screens/UserKmLimit";
import UserProfile from "../screens/UserProfile";
import ImageSelector from "../screens/ImageSelector";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const UserShoeNavigator = () => {
  const list = useSelector((state) => state.list.list);

  return (
    <Stack.Navigator initialRouteName={!list ? "Form" : "userProfile"}>
      <Stack.Screen
        name="Form"
        component={Form}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Products"
        component={TypeUser}
        options={({ route }) => ({
          title: `${route.params.shoesUser.name} ${route.params.shoesUser.brand}`,
        })}
      />
      <Stack.Screen
        name="UserKm"
        component={UserKmLimit}
        options={({ route }) => ({
          title: `${route.params.selected.name} ${route.params.selected.brand}`,
        })}
      />

      <Stack.Screen
        name="userProfile"
        component={UserProfile}
        options={{ headerBackVisible: false, title: "Perfil del usuario" }}
      />
      <Stack.Screen
        name="sneakerItem"
        component={ShowSneakerItem}
        options={{ title: "Zapatilla escogida" }}
      />
      <Stack.Screen
        name="picShot"
        component={ImageSelector}
        options={{ title: "Introduce tu foto de perfil" }}
      />
    </Stack.Navigator>
  );
};

export default UserShoeNavigator;
