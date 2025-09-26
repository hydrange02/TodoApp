import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './compoment/Navigation/TabNavigation';
import DrawerNavigator from './compoment/Navigation/DrawNavigation';



function Screen() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      
      <DrawerNavigator />
    </View>
  );
}



export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Screen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
