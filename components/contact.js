import React from 'react';
import { View, Text, TouchableOpacity, Linking, Alert, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ContactScreen = () => {
  const handleCallPress = () => {
    Linking.openURL('tel:0182765443').catch(() =>
      Alert.alert('Error', 'Unable to open dialer')
    );
  };

  const handleCallButton = () => {
    Linking.openURL('tel:0184633478').catch(() =>
      Alert.alert('Error', 'Unable to open dialer')
    );
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:precious@etn.co.za').catch(() =>
      Alert.alert('Error', 'Unable to open email client')
    );
  };

  const handleEmailClick = () => {
    Linking.openURL('mailto:info@etn.co.za').catch(() =>
      Alert.alert('Error', 'Unable to open email client')
    );
  };

  const handleLocationPress = () => {
    Linking.openURL('https://maps.google.com/?q=3 Benmore Road Johannesburg').catch(() =>
      Alert.alert('Error', 'Unable to open Maps')
    );
  };

  return (
    <View style={styles.container}>
      <Image 
          source={require('../assets/logo1.png')}
          style={styles.logo} 
      />
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.subtitle}>
        Don't hesitate to contact us for more information regarding the courses we offer. Our team is available to assist you.
      </Text>

      <View style={styles.contactGrid}>
        <TouchableOpacity style={styles.contactItem} onPress={handleCallPress}>
          <Icon name="call-outline" size={24} color="#000" />
          <Text style={styles.contactItemTitle}>Call us</Text>
          <Text style={styles.contactItemText}>018 276 5443</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem} onPress={handleCallPress}>
          <Icon name="call-outline" size={24} color="#000" />
          <Text style={styles.contactItemTitle}>Call us</Text>
          <Text style={styles.contactItemText}>018 463 3478</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem} onPress={handleEmailPress}>
          <Icon name="mail-outline" size={24} color="#000" />
          <Text style={styles.contactItemTitle}>Email us</Text>
          <Text style={styles.contactItemText}>precious@etn.co.za</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem} onPress={handleEmailClick}>
          <Icon name="mail-outline" size={24} color="#000" />
          <Text style={styles.contactItemTitle}>Email us</Text>
          <Text style={styles.contactItemText}>info@etn.co.za</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem} onPress={handleLocationPress}>
          <Icon name="location-outline" size={24} color="#000" />
          <Text style={styles.contactItemTitle}>Our location</Text>
          <Text style={styles.contactItemText}>3 Benmore Road</Text>
        </TouchableOpacity>

        <View style={styles.contactItem}>
          <Icon name="time-outline" size={24} color="#000" />
          <Text style={styles.contactItemTitle}>Work hours</Text>
          <Text style={styles.contactItemText}>Mon-Fri • 9-17</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  logo: {
    width: 100,  // Adjust width as necessary
    height: 100, // Adjust height as necessary
    resizeMode: 'contain', // Ensures the image scales correctly
    marginBottom: 20,
    alignSelf: 'center',
  }, 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  contactGrid: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  contactItemTitle: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  contactItemText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#777',
  },
});

export default ContactScreen;
