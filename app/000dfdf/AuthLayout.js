
import React from 'react';
import { Stack } from 'expo-router';
import { useAuth } from '../../context/AuthContext'; 

export default function AuthLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Text>Loading...</Text>; // Optionally, show a loading screen
  }

  return (
    <Stack>
      {user ? (
        <Stack.Screen name="home" /> // Authenticated users see the home screen
      ) : (
        <Stack.Screen name="index" /> // Non-authenticated users see the login screen
      )}
    </Stack>
  );
}
