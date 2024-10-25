import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const SixWeekCoursesScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image 
          source={require('../assets/logo1.png')}
          style={styles.logo} 
      />
      <Text style={styles.title}>Short Courses</Text>

      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>
          The <Text style={styles.boldText}>Short Courses</Text> take place for a period of <Text style={styles.boldText}>6 weeks</Text>.
        </Text>
      </View>

      <ScrollView>
      <TouchableOpacity
        style={styles.courseCard}
        onPress={() => navigation.navigate('Cooking')}  // Navigate to Details Screen
      >
        <Image source={require('../assets/cooking.webp')} style={styles.courseImage} />
        <Text style={styles.courseName}>Cooking</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.courseCard}
        onPress={() => navigation.navigate('Child-Minding')}  // Navigate to Details Screen
      >
        <Image source={require('../assets/childminder.jpg')} style={styles.courseImage} />
        <Text style={styles.courseName}>Child Minding</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.courseCard}
        onPress={() => navigation.navigate('Garden')}  // Navigate to Details Screen
      >
        <Image source={require('../assets/garden.png')} style={styles.courseImage} />
        <Text style={styles.courseName}>Garden Maintenance</Text>
      </TouchableOpacity>
      </ScrollView>
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
  },
  descriptionBox: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#333',
  },
  boldText: {
    fontWeight: 'bold',
  },
  courseCard: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    elevation: 2,
  },
  courseImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  courseName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  courseList: {
    paddingBottom: 20,
  },
});

export default SixWeekCoursesScreen;
