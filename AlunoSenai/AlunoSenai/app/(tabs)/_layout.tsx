import { Tabs } from 'expo-router';
import { ScrollView, Image, StyleSheet, Platform, Text, View, Pressable } from 'react-native';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon style={styles.icons} name={focused ? 'home' : 'home-outline'} color={focused ? '#ED1F24' : 'grey'} />
          ),
        }}
      />
      <Tabs.Screen
        name="carteirinha"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome style={styles.icons} name={focused ? 'id-card' : 'id-card-o'} size={30} color={focused ? '#ED1F24' : 'grey'} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons style={styles.icons} name={focused ? 'person-circle' : 'person-circle-outline'} color={focused ? '#ED1F24' : 'grey'} size={45}/>
          ),
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  tabs: {
    backgroundColor: 'green',
  },
  icons: {
    backgroundColor: '#ffff',
    width: 60,
    height: 60,
    marginBottom: 45,
    textAlign:'center',
    verticalAlign: 'middle',
    borderRadius: 100,
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 5,
  },
})