import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Course data
const courses = [
  { id: '1', name: 'First Aid', price: 1500 },
  { id: '2', name: 'Sewing', price: 1500 },
  { id: '3', name: 'Landscaping', price: 1500 },
  { id: '4', name: 'Life Skills', price: 1500 },
  { id: '5', name: 'Child Minding', price: 750 },
  { id: '6', name: 'Cooking', price: 750 },
  { id: '7', name: 'Garden Maintenance', price: 750 },
];

// Discount calculation logic
const calculateDiscount = (selectedCourses) => {
  const numCourses = selectedCourses.length;
  let discount = 0;

  if (numCourses === 2) discount = 0.05;
  else if (numCourses === 3) discount = 0.1;
  else if (numCourses >= 4) discount = 0.15;

  return discount;
};

// Calculate Fees Screen Component
const CalculateFeesScreen = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // Handle course selection
  const handleSelectCourse = (course) => {
    let updatedSelectedCourses = [...selectedCourses];
    if (updatedSelectedCourses.includes(course)) {
      updatedSelectedCourses = updatedSelectedCourses.filter(c => c.id !== course.id);
    } else {
      updatedSelectedCourses.push(course);
    }
    setSelectedCourses(updatedSelectedCourses);
    calculateTotal(updatedSelectedCourses);
  };

  // Calculate the total fee based on selected courses
  const calculateTotal = (selectedCourses) => {
    const subtotal = selectedCourses.reduce((sum, course) => sum + course.price, 0);
    const discountRate = calculateDiscount(selectedCourses);
    const discountAmount = subtotal * discountRate;
    const total = subtotal - discountAmount;

    setSubtotal(subtotal);
    setDiscountAmount(discountAmount);
    setTotal(total);
  };

  // Render each course as a selectable option
  const renderCourseItem = ({ item }) => {
    const isSelected = selectedCourses.includes(item);
    return (
      <TouchableOpacity style={styles.courseItem} onPress={() => handleSelectCourse(item)}>
        <Text style={styles.courseName}>{item.name}</Text>
        <Text style={styles.coursePrice}>R{item.price}</Text>
        <View style={isSelected ? styles.radioSelected : styles.radioUnselected} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Image 
          source={require('../assets/logo1.png')}
          style={styles.logo} 
      />
      <Text style={styles.title}>Calculate Fees</Text>
      <Text style={styles.subtitle}>Select courses to calculate total fees and discounts.</Text>

      <FlatList
        data={courses}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.courseList}
      />

      {/* Summary of the fees */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>SUBTOTAL</Text>
        <Text style={styles.summaryValue1}>R{subtotal.toFixed(2)}</Text>
      </View>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>DISCOUNT</Text>
        <Text style={styles.summaryValue}>- R{discountAmount.toFixed(2)}</Text>
      </View>
      <View style={styles.summary}>
        <Text style={styles.grandTotalText}>GRAND TOTAL</Text>
        <Text style={styles.grandTotalValue}>R{total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

// Styles for the component
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
    marginTop: 15,
  }, 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  courseList: {
    marginBottom: 20,
  },
  courseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 1,
  },
  courseName: {
    fontSize: 18,
  },
  coursePrice: {
    fontSize: 16,
    color: '#888',
  },
  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#6117EB',
  },
  radioUnselected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#6117EB',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 1,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red'
  },
  summaryValue1: {
    fontSize: 16,
    color: 'black'
  },
  grandTotalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  grandTotalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
});

export default CalculateFeesScreen;
