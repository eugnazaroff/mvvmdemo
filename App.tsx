import {Provider} from 'inversify-react';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {appContainer} from './src/app/DI/appContainer';
import {AppStack} from './src/app/navigation/StackNavigation';
import {graphQLCLient} from './src/app/services/graphQLCLient.ts';
import {ApolloProvider} from '@apollo/client';

export const App = () => {
  return (
    <ApolloProvider client={graphQLCLient}>
      <Provider container={appContainer}>
        <NavigationContainer
          theme={{
            dark: false,
            colors: {
              background: '#fff',
              primary: 'blue',
              card: '#fff',
              text: 'black',
              border: 'black',
              notification: 'red',
            },
          }}>
          <AppStack />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};
