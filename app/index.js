import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AnimatedSplash from 'react-native-animated-splash-screen';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatedSplash
      isLoaded={isLoaded}
      logoImage={require('./../assets/images/splash.png')}
      backgroundColor={"#00420c"}
      logoHeight={200}
      logoWidth={200}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to Greendays4Future</Text>
      </View>
    </AnimatedSplash>
  );
}
