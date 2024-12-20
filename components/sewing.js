import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SewingScreen = ({ route, navigation }) => {
   // const { course } = route.params || {}; // Fallback to empty object

   return (
      <View style={styles.container}>
         <View style={styles.header1}>
            <Image
               source={require("../assets/logo1.png")}
               style={styles.logo}
            />
         </View>

         <View style={styles.header}>
            <TouchableOpacity
               onPress={() => navigation.navigate("6-months")}
               style={styles.backButton}>
               <Icon name="arrow-back" size={30} color="#000" />
            </TouchableOpacity>
            <Text style={styles.title}>Sewing</Text>
         </View>

         <View style={styles.purposeBox}>
            <Text style={styles.purposeText}>
               <Text style={styles.boldText}>The purpose of </Text>
               this course is to teach garment tailoring and sewing techniques.
            </Text>
         </View>

         <Image
            source={require("../assets/sewing.webp")}
            style={styles.courseImage}
         />

         <Text style={styles.price}>Price: R1500</Text>

         <View style={styles.contentBox}>
            <Text style={styles.contentTitle}>Content:</Text>
            <Text style={styles.contentItem}>
               › Sewing machine operation. {"\n"}› Garment design. {"\n"}›
               Alterations and repairs.
            </Text>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#E8DFF9",
      padding: 20,
   },
   header1: {
      alignItems: "center",
   },
   logo: {
      width: 100,
      height: 100,
      marginBottom: 10,
      marginTop: 15
   },
   header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
   },
   backButton: {
      marginRight: 240,
   },
   title: {
      fontSize: 32,
      fontWeight: "medium",
      color: "#000",
   },
   purposeBox: {
      backgroundColor: "#FFF",
      borderRadius: 15,
      padding: 15,
      marginBottom: 20,
   },
   purposeText: {
      fontSize: 14,
      color: "#666",
      textAlign: "center",
      lineHeight: 20,
   },
   boldText: {
      fontWeight: "bold",
   },
   courseImage: {
      width: "100%",
      height: 200,
      borderRadius: 15,
      marginBottom: 20,
   },
   price: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#000",
      marginBottom: 20,
   },
   contentBox: {
      backgroundColor: "#FFF",
      borderRadius: 15,
      padding: 15,
   },
   contentTitle: {
      fontSize: 16,
      color: "#666",
      marginBottom: 10,
   },
   contentItem: {
      fontSize: 14,
      color: "#666",
      marginBottom: 8,
      lineHeight: 20,
   },
});

export default SewingScreen;
