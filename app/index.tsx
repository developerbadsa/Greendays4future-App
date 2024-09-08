import React, {useState} from 'react';
import {
   Text,
   View,
   StyleSheet,
   KeyboardAvoidingView,
   TextInput,
   Button,
   ActivityIndicator,
   Alert,
} from 'react-native';
import {useAuth} from '../context/AuthContext';

export default function Index() {
   const {user, Register, loading, login, logout} = useAuth();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [isLoading, setIsLoading] = useState(false);

   const handleLogin = () => {
      if (!email || !password) {
         Alert.alert('Error', 'Both email and password are required.');
         return;
      }
      setIsLoading(true);
      login(email, password)
         .then((data) => {
            Alert.alert('Success', 'Logged in successfully!');
            console.log('data '+data)
         })
         .catch(error => {
            Alert.alert('Login failed', error.message);
            console.log(error)
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   const handleRegistration = () => {
      if (!email || !password) {
         Alert.alert('Error', 'Both email and password are required.');
         return;
      }
      setIsLoading(true);
      Register(email, password)
         .then(() => {
            Alert.alert('Success', 'Registered successfully!');
         })
         .catch(error => {
            Alert.alert('Registration failed', error.message);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   if (loading) {
      return <ActivityIndicator size='large' />;
   }

   // when User is loggedin
   if (user) {
      return (
         <View style={styles.container}>
            <Text>Welcome, {user.email}</Text>
            <Button title='Logout' onPress={logout} />
         </View>
      );
   }

   // User is not logged in
   return (
      <View style={styles.container}>
         <KeyboardAvoidingView behavior='padding'>
            <TextInput
               style={styles.input}
               value={email}
               onChangeText={setEmail}
               autoCapitalize='none'
               keyboardType='email-address'
               placeholder='Email'
            />
            <TextInput
               style={styles.input}
               value={password}
               onChangeText={setPassword}
               secureTextEntry
               placeholder='Password'
            />
            {isLoading ? (
               <ActivityIndicator size='small' style={{margin: 28}} />
            ) : (
               <View>
                  <Button onPress={handleLogin} title='Login' />
                  <Button onPress={handleRegistration} title='Registration' />
               </View>
            )}
         </KeyboardAvoidingView>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      marginHorizontal: 20,
      flex: 1,
      justifyContent: 'center',
   },
   input: {
      marginVertical: 4,
      height: 50,
      borderWidth: 1,
      borderRadius: 4,
      padding: 10,
      backgroundColor: '#fff',
   },
});
