import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


// Courses Screen Component
const CoursesScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* 6-Week Courses */}
      <Image 
          source={require('../assets/logo1.png')}
          style={styles.logo} 
      /> 
      <Text style={styles.title}>Courses</Text>
      <View style={styles.courseCard}>
        <View style={styles.courseHeader}>
          <Text style={styles.courseDuration}>6</Text>
          <View>
            <Text style={styles.courseText}>Week</Text>
            <Text style={styles.courseText}>Courses</Text>
          </View>
        </View>
        <View style={styles.courseDetails}>
          <Text style={styles.courseItem}>› Cooking</Text>
          <Text style={styles.courseItem}>› Child Minding</Text>
          <Text style={styles.courseItem}>› Garden Maintenance</Text>
        </View>
        <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('SixWeekCourses')}>
          <Text style={styles.detailsText}>Details</Text>
          <Icon name="arrow-forward-circle-outline" size={20} color="#7F3DFF" />
        </TouchableOpacity>
      </View>

      {/* 6-Month Courses */}
      <View style={styles.courseCard}>
        <View style={styles.courseHeader}>
          <Text style={styles.courseDuration}>6</Text>
          <View>
            <Text style={styles.courseText}>Months</Text>
            <Text style={styles.courseText}>Courses</Text>
          </View>
        </View>
        <View style={styles.courseDetails}>
          <Text style={styles.courseItem}>› Sewing</Text>
          <Text style={styles.courseItem}>› First Aid</Text>
          <Text style={styles.courseItem}>› Life Skills</Text>
          <Text style={styles.courseItem}>› Landscaping</Text>
        </View>
        <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('SixMonthCourses')}>
          <Text style={styles.detailsText}>Details</Text>
          <Icon name="arrow-forward-circle-outline" size={20} color="#7F3DFF" />
        </TouchableOpacity>
      </View>

      {/* Discounts */}
      <View style={styles.discountSection}>
        <Text style={styles.discountTitle}>Our Discounts</Text>
        <Text style={styles.discountText}>2 Courses :<Text style={styles.boldText}> 5% OFF</Text></Text>
        <Text style={styles.discountText}>3 Courses :<Text style={styles.boldText}> 10% OFF</Text></Text>
        <Text style={styles.discountText}>3+ Courses :<Text style={styles.boldText}> 15% OFF</Text></Text>
      </View>
    </ScrollView>
  );
};

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 100,  // Adjust width as necessary
    height: 100, // Adjust height as necessary
    resizeMode: 'contain', // Ensures the image scales correctly
    marginBottom: 20,
    alignSelf: 'center',
  },  
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  courseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  courseDuration: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#7F3DFF',
    marginRight: 10,
  },
  courseText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseDetails: {
    marginBottom: 10,
  },
  courseItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  detailsText: {
    fontSize: 16,
    color: '#7F3DFF',
    marginRight: 5,
  },
  discountSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  discountTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  discountText: {
    fontSize: 16,
    marginBottom: 5,
  },
  boldText: { 
    fontWeight: 'bold' 
  },
});

export default CoursesScreen;
