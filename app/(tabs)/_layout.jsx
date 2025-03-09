import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name='index'
            options={{
                title: 'Home',
                headerShown: false
            }}
        />
        <Tabs.Screen
            name='search'
            options={{
                title: 'Search',
                headerShown: false
            }}
        />
        <Tabs.Screen
            name='bin'
            options={{
                title: 'Bin',
                headerShown: false
            }}
        />
        <Tabs.Screen
            name='history'
            options={{
                title: 'History',
                headerShown: false
            }}
        />
        <Tabs.Screen
            name='scan'
            options={{
                title: 'Scan',
                headerShown: false
            }}
        />
    </Tabs>
  )
}

export default _layout   