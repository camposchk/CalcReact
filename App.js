import Calc from './Calc'
import Hist from './Hist'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HistoryProvider } from './Context'

export default function App() {
  const Stack = createStackNavigator()

  return (
      <NavigationContainer>
        <HistoryProvider>
          <Stack.Navigator>
            <Stack.Screen name="Calc" component={Calc} options={{headerShown: false}}/>
            <Stack.Screen name="Hist" component={Hist}/>
          </Stack.Navigator>
        </HistoryProvider>
      </NavigationContainer>
)};
