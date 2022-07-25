import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import CategoryView from '../screens/CategoryView';



const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Straten Strategie',
        }
    },
    CategoryView: {
        screen: CategoryView,
        navigationOptions: {
            title: 'Category Details',
        }
    },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default HomeStack;