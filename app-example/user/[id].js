import { Link, useLocalSearchParams } from 'expo-router';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const User = () => {

  const {id} = useLocalSearchParams()

console.log(id)

  return (
    <View >
      <Text>User here </Text>
      <Link href={'/'}>Back to home Page now</Link>
    </View>
  );
};

export default User;
