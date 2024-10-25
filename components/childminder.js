import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MinderScreen = ({ route, navigation }) => {
  // const { course } = route.params || {}; // Fallback to empty object

  return (
    <View style={styles.container}>
      <View style={styles.header1}>
        <Image 
          source={require('../assets/logo1.png')}
          style={styles.logo} 
        />     
        <Text style={styles.title}>Child Minding</Text>     
      </View>

      <View style={styles.header2}>
          <TouchableOpacity onPress={() => navigation.navigate('6-weeks')} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          
      </View> 

      <View style={styles.purposeBox}>
        <Text style={styles.purposeText}>
          <Text style={styles.boldText}>The purpose </Text>
          of This course provides basic child and baby care.
        </Text>
      </View>

      <Image
        source={require('../assets/childminder.jpg')}
        style={styles.courseImage}
      />

      <Text style={styles.price}>Price: R750</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contentTitle}>Content:</Text>
        <Text style={styles.contentItem}>
          › Birth to six-month old baby needs. {'\n'}
          › Seven-month to one year old needs. {'\n'}
          › Toddler needs. {'\n'}
          › Educational toys. 
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F2FF',
    padding: 20,
  },
  header1: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  backButton: {
    marginRight: 10,         // Add some space between icon and title
  },
  header2: {
    flexDirection: 'row',    // Align icon and title in a row
    alignItems: 'center',    // Vertically align items
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  purposeBox: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  purposeText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  courseImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  contentBox: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
  },
  contentTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  contentItem: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
  },
});

export default MinderScreen;