import React, { Component } from 'react';
import { createBottomTabNavigator, View } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Bookcase from './screens/Bookcase';
import AddBook from './screens/AddBook';
import Profile from './screens/Profile';
import Lists from './screens/Lists';
import Explore from './screens/Explore';

export default createBottomTabNavigator({
  BookcasePage: Bookcase,
  AddBookPage: AddBook,
  ProfilePage: Profile,
  ListsPage: Lists,
  ExplorePage: Explore
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch (routeName) {
        case 'BookcasePage':
          iconName = `ios-book${focused ? '' :  '-outline'}`;          
          break;
        case 'AddBookPage':
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
          break;
        case 'ProfilePage':
          iconName = `ios-person${focused ? '' : '-outline'}`;
          break;
        case 'ListsPage':
          iconName = `ios-list${focused ? '' : '-outline'}`;
          break;
        case 'ExplorePage':
          iconName = `ios-ionic${focused ? '' : '-outline'}`;
          break;
        default:
          break;
      }
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    }
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});

// export default class App extends Component {
  // createBottomTabNavigator({
  //   BookcasePage: Bookcase,
  //   AddBookPage: AddBook,
  //   ProfilePage: Profile,
  //   ListsPage: Lists,
  //   ExplorePage: Explore
  // })
  // render() {
  //   return (
  //     <View>
  //       <createBottomTabNavigation></createBottomTabNavigation>
  //     </View>
  //   );
  // }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   middle: {
//     padding: 10,
//   },
//   font: {
//     fontSize: 42
//   },
//   input: {
//     height: 40
//   }
// });
