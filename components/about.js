import React from "react";
import { View, Text, StyleSheet, Image} from 'react-native';

const AboutScreen = () => (
    <View style={styles.container}>
      <Text>About Screen</Text>
      <Image 
          source={require('../assets/logo1.png')}
          style={styles.logo} 
      />
    </View>
  );

const styles = StyleSheet.create({
container: { 
    flex: 1,
    backgroundColor: '#F4F2FF', 
    padding: 20 
    },
    logo: {
      width: 100,  // Adjust width as necessary
      height: 100, // Adjust height as necessary
      resizeMode: 'contain', // Ensures the image scales correctly
      marginBottom: 20,
      alignSelf: 'center',
    }, 
});

export default AboutScreen;  