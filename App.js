import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import NewsScreen from './screens/NewsScreen';
import SourcesScreen from './screens/SourcesScreen';
import NewsListScreen from './screens/NewsListScreen';


export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      sources: { screen: SourcesScreen},
      newsFlow: { 
        screen: StackNavigator({
          newslist: { screen: NewsListScreen },
          news: { screen: NewsScreen }
        }) 
      }
    });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
