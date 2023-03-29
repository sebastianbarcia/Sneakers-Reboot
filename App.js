import { StyleSheet} from 'react-native';
import MainNavigator from './src/navigators/MainNavigator';
import OnBoarding from './src/components/OnBoarding';
import store from './src/store';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <>
    <Provider store={store}>
      {/* <OnBoarding/> */}
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
