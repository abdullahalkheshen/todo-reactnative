import {View, Text} from 'react-native'
import { Tabs } from 'expo-router';
import {Ionicons} from "@expo/vector-icons";


const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'lightgreen',
                tabBarStyle: {
                    backgroundColor: "#1e293b",
                    borderTopWidth: 1,
                    borderTopColor: 'yellow',
                    elevation: 90,
                    shadowColor: 'black',
                    shadowOffset: {width: 0, height: 0},
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                }
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Todos',
                    tabBarIcon: ({color,size}) => (
                        <Ionicons name="flash-outline" size={size} color={color}/>
                    )
                }}
            />
            <Tabs.Screen
                name='settings'
                options={{
                    title: 'Settings',
                    tabBarIcon: ({color,size}) => (
                        <Ionicons name="settings" size={size} color={color}/>
                    )
                }}
            />
        </Tabs>
    )
}

export default TabsLayout