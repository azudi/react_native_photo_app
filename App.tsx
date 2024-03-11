/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// import React from 'react';
// import AppControlFlow from './src copy/AppControlFlow';

// const App = () => {
//   return <AppControlFlow />;
// };

// export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Routes from './src/navigation';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from './src/theme';
import { AppProvider } from './src/contextProviver/AppContext';
import { appStoreFormat } from './src/services/constant/appConstant';
import useAddTostorage from './src/services/hooks/addToStorage';
import { Store } from './src/services/interface/StoreInterface';
import Toast from './src/components/widget/Toast';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // Create a client
  const queryClient = new QueryClient();

  const [app, setApp] = useState({...appStoreFormat} as Store);



  return (
    <AppProvider.Provider value={{ app, setApp }}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.white }}>
          <StatusBar barStyle="dark-content" backgroundColor={theme.white} />
          <Routes />
          <Toast props={ app.toast }/>
        </SafeAreaView>
      </QueryClientProvider>
    </AppProvider.Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
