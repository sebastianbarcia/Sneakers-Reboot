import { StyleSheet} from 'react-native';
import MainNavigator from './src/navigators/MainNavigator';
import OnBoarding from './src/screens/OnBoarding';
import store from './src/store';
import { Provider } from 'react-redux';
import { EntryUserNavigation } from './src/navigators/EntryUserNavigation';
export default function App() {
  return (
    <>
    <Provider store={store}>
    {/* <EntryUserNavigation/> */}
       <MainNavigator/> 
    </Provider>
   
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
