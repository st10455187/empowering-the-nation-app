import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

// Long Courses Screen Component
const SixMonthCoursesScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image 
          source={require('../assets/logo1.png')}
          style={styles.logo} 
      />
      <Text style={styles.title}>Six Month Courses</Text>

      {/* Description Box */}
      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>
          The <Text style={styles.boldText}>Six Month Courses</Text> provide in-depth training
          over an extended period.
        </Text>
      </View>

      <ScrollView>
      <TouchableOpacity
        style={styles.courseCard}
        onPress={() => navigation.navigate('Sewing')}
      >
        <Image source={require('../assets/sewing.webp')} style={styles.courseImage} />
        <Text style={styles.courseName}>Sewing</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.courseCard}
        onPress={() => navigation.navigate('Landscaping')}
      >
        <Image source={require('../assets/Landscaping.jpg')} style={styles.courseImage} />
        <Text style={styles.courseName}>Landscaping</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.courseCard}
        onPress={() => navigation.navigate('First-aid')}
      >
        <Image source={require('../assets/aid.webp')} style={styles.courseImage} />
        <Text style={styles.courseName}>First Aid</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.courseCard}
        onPress={() => navigation.navigate('Life-Skills')}
      >
        <Image source={require('../assets/life.jpg')} style={styles.courseImage} />
        <Text style={styles.courseName}>Life Skills</Text>
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
  },
  boldText: {
    fontWeight: 'bold',
  },
  courseList: {
    paddingBottom: 20,
  },
  courseCard: {
    marginBottom: 20,
    padding: 10,
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
  coursePrice: {
    marginTop: 5,
    fontSize: 16,
    color: '#666',
  },
  courseDuration: {
    marginTop: 5,
    fontSize: 16,
    color: '#666',
  },
});

export default SixMonthCoursesScreen;
