import {Link} from 'expo-router';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
         <Text className="mt-2 text-lg text-black dark:text-white" >
            Welcome to Greendays4Future
         </Text>
         <Link href={'/user/user4545'}> Goto User page</Link>
         <Link href={'/plant_tree'}> Goto Plant tree page</Link>
      </View>
   );
}
