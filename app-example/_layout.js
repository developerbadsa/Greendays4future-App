import { Stack } from 'expo-router';

const Layout = () => {
  return (
   <Stack>
     <Stack.Screen name="user/[id]" options={{title:'Users'}}/>
     <Stack.Screen name="index" />
     <Stack.Screen name="plant_tree/index"  options={{title:'Plant Your Tree'}}/>
   </Stack>
  );
};
export default Layout;
