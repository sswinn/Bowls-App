
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CardsListScreen from './src/screens/CardsListScreen';
import ViewCardScreen from './src/screens/ViewCardScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ItemProvider } from './src/contexts/CardContext';
import CameraScreen from './src/screens/CameraScreens';
import PhotoScreen from './src/screens/PhotoScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ItemProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "CardsList">

          <Stack.Screen 
            name = "CardsList" 
            component = {CardsListScreen}
            options = {{ title: "Saved Cards" }}
          />

          <Stack.Screen 
            name = "ViewCard" 
            component = {ViewCardScreen}
            options = {{ title: "Score Card" }}
          />

          <Stack.Screen
            name = "Camera"
            component = {CameraScreen}
            options = {{ title: "Camera" }}
          />

          <Stack.Screen
            name = "Photo"
            component = {PhotoScreen}
            options = {{ title: "Your Photo" }}
          />

        </Stack.Navigator>

      </NavigationContainer>
    </ItemProvider>
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

export default App;
