import {View, Text} from 'react-native'
import { Tabs } from 'expo-router';
import {Ionicons} from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme";


const TabsLayout = () => {
    const {colors} = useTheme();
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textMuted,
                tabBarStyle: {
                    backgroundColor: colors.surface,
                    borderTopWidth: 1,
                    borderTopColor: colors.border,
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