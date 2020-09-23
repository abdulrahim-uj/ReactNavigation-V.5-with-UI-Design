import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main_Tab_Screen from './src/components/screeners/MainTabScreen';
import { DrawerContent } from './src/components/screeners/DrawerContent';
import Bookmark_Screen from './src/components/screeners/BookmarkScreen';
import Settings_Screen from './src/components/screeners/SettingsScreen';
import Support_Screen from './src/components/screeners/SupportScreen';
import RootStack_Screen from './src/components/screeners/RootStackScreen';



const Drawer = createDrawerNavigator();



const App = () => {
    return(
        <NavigationContainer>
            <RootStack_Screen />
            {/* <Drawer.Navigator drawerContent= { props => <DrawerContent { ...props } /> } >
                <Drawer.Screen 
                    name="HomeDrawer"
                    component={Main_Tab_Screen}
                />
                <Drawer.Screen 
                    name="Bookmark"
                    component={Bookmark_Screen}
                />
                <Drawer.Screen 
                    name="Setting"
                    component={Settings_Screen}
                />
                <Drawer.Screen 
                    name="Supporter"
                    component={Support_Screen}
                />
            </Drawer.Navigator> */}
        </NavigationContainer>
    );
}

export default App;

