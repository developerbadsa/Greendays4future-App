import { Link } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from '../../src/screen/HomeScreen';

export default function PlantTree() {
  return (
    <View>
      <Text>panting tree</Text>
      <Link href={'/'}>goto home </Link>
      <HomeScreen></HomeScreen>
     </View>
  );
}
