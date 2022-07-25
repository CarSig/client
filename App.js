import React, { useState } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import Navigator from './routes/drawer';


const getFonts = () => Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
});

const App = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);



    if (fontsLoaded) {
        return (
            <Navigator />
        );
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)}
                onError={() => console.log('error')}
            />
        )
    }

}

export default App;