import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {PostsScreen} from '../../modules/posts/presentation/PostsScreen';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useAppInjection} from '../DI/appContainer.ts';
import {AuthScreen} from '../../modules/auth';
import {observer} from 'mobx-react-lite';
type RootStackParamList = {
  auth: undefined;
  main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const useAppNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

export const AppStack = observer(() => {
  const authService = useAppInjection('IAuthService');

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!authService.isAuth ? (
        <Stack.Screen name="auth" component={AuthScreen} />
      ) : (
        <Stack.Group>
          <Stack.Screen name="main" component={PostsScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
});
