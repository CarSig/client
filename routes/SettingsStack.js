import { createStackNavigator } from 'react-navigation-stack';
import Settings from '../screens/SettingsView';
import Header from '../componentsShared/Header';

const screens = {
    Settings: {
        screen: Settings,
        navigationOptions: ({ navigation }) => {
            return { headerTitle: () => <Header navigation={navigation} title="Settings" /> }
        }
    },
}

const SettingsStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default SettingsStack;