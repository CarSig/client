import { createStackNavigator } from 'react-navigation-stack';
import Settings from '../screens/SettingsView';

const screens = {
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Settings Straten Strategie'
        },
    },
}

const SettingsStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default SettingsStack;