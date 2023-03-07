import Entypo from '@expo/vector-icons/Entypo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoarding } from 'Authentication/OnBoarding';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const AuthenticationStack = createNativeStackNavigator();

  const AuthenticationNavigator = () => {
    return (
      <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
      </AuthenticationStack.Navigator>
    );
  };

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    </View>
  );
}
