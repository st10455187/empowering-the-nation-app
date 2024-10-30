import React from "react";
import {
   View,
   Text,
   TouchableOpacity,
   Linking,
   Alert,
   StyleSheet,
   Image,
   ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const AboutScreen = () => {
   return (
      <ScrollView style={styles.container}>
         <Image source={require("../assets/logo1.png")} style={styles.logo} />
         <Text style={styles.title}>About Us</Text>
         <Text style={styles.subtitle}>
         <Text style={styles.boldText}>Empowering The Nation</Text> is a small- to mid- size enterprise located in the city of Johannesburg. At <Text style={styles.boldText}>Empowering The Nation</Text> our aim is to upskill the skills of domestic workers and gardeners. We offer both 6-week short courses and 6-month long courses to workers.
         </Text>
         <Image source={require("../assets/aid.webp")} style={styles.aboutImage} />

      </ScrollView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#E8DFF9",
   },
   logo: {
      width: 100,
      height: 100,
      resizeMode: "contain",
      marginBottom: 20,
      alignSelf: "center",
      marginTop: 15,
   },
   title: {
      fontSize: 42,
      fontWeight: "medium",
      color: "#000",
      marginBottom: 30,
      marginLeft: 15,
   },
   subtitle: {
      fontSize: 16,
      color: "#555",
      marginBottom: 20,
      marginLeft: 15,
      backgroundColor: 'white',
      borderRadius: 25,
      width: 350,
      height: 180,
      padding: 20,
      textAlign: 'center'
   },
   aboutImage: {
    width: 350,
    height: 200,
    marginLeft: 15,
    borderRadius: 25
   },
   contactCard: {
      backgroundColor: "white",
      width: 160,
      height: 160,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 10,
      padding: 10,
   },
   boldText: {
    fontWeight: 'bold',
  },
   iconBg: {
      backgroundColor: "black",
      width: 60,
      height: 60,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
   },
   contactHeading: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 20,
   },
   contactText: {
      alignItems: "center",
   },
   contactInfo: {
      fontSize: 15,
      textAlign: "center",
      color: "#717171",
   },
   locationText: {
      marginLeft: 15,
      fontSize: 20,
      marginTop: 20,
      marginBottom: 10,
   },
   googleMaps: {
      marginLeft: 15,
      width: 340, // Or set a width that fits your layout without wrapping
      height: 200,
      marginBottom: 10,
      borderRadius: 25,
      flexDirection: "row",
      alignItems: "center", // Centers vertically
      justifyContent: "flex-start", // Adjust if you want space around/between items
   },
});

export default AboutScreen;
