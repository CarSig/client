import { createStackNavigator } from 'react-navigation-stack';
import Filters from '../screens/FiltersView';

const screens = {
    Filters: {
        screen: Filters,
        navigationOptions: {
            title: 'Settings Straten Strategie'
        },
    },
}

const FiltersStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default FiltersStack;