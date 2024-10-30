import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [courses, setCourses] = useState('');

  const handleSubmit = () => {
    // Basic validation
    if (!name || !surname || !email || !phone || !courses) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    if (!validatePhone(phone)) {
      Alert.alert('Error', 'Please enter a valid phone number');
      return;
    }

    // Clear all fields after submission
    setName('');
    setSurname('');
    setEmail('');
    setPhone('');
    setCourses('');

    // Show success message
    Alert.alert('Success', 'Registration submitted successfully!');
  };

  // Simple email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Simple phone validation
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phone);
  };

  return (
    <ScrollView style={styles.container}>
      <Image 
          source={require('../assets/logo1.png')}
          style={styles.logo} 
      />
      <Text style={styles.title}>Registration</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Surname</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your surname"
        value={surname}
        onChangeText={setSurname}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Select Courses</Text>
      <TextInput
        style={styles.input}
        placeholder="Landscaping, Sewing"
        value={courses}
        onChangeText={setCourses}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Registration</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Styling for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E8DFF9',
  },
  logo: {
    width: 100,  // Adjust width as necessary
    height: 100, // Adjust height as necessary
    resizeMode: 'contain', // Ensures the image scales correctly
    marginBottom: 20,
    alignSelf: 'center',
    marginTop: 15,
  }, 
  title: {
    fontSize: 42,
    fontWeight: "medium",
    color: "#000",
    marginBottom: 20,
    marginLeft: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
    width: 300,
    height: 45
  },
  button: {
    backgroundColor: '#a37af0',
    borderRadius: 5,
    alignItems: 'center',
    width: 300,
    height: 45,
    justifyContent: 'center',},
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
