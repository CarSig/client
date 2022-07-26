import { createStackNavigator } from 'react-navigation-stack';
import Filters from '../screens/FiltersView';
import Header from '../componentsShared/Header';

const screens = {
    Filters: {
        screen: Filters,
        navigationOptions: ({ navigation }) => {
            return { headerTitle: () => <Header navigation={navigation} title="Filters" /> }
        }
    },
}

const FiltersStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default FiltersStack;