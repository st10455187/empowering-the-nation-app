import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const GardenScreen = ({ route, navigation }) => {
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
               onPress={() => navigation.navigate("6-weeks")}
               style={styles.backButton}>
               <Icon name="arrow-back" size={30} color="#000" />
            </TouchableOpacity>
            <Text style={styles.title}>Garden Maintenance</Text>
         </View>

         <View style={styles.purposeBox}>
            <Text style={styles.purposeText}>
               <Text style={styles.boldText}>The purpose </Text>
               is to Learn basic knowledge of watering, pruning and plantation
               in a domestic garden.
            </Text>
         </View>

         <Image
            source={require("../assets/garden.png")}
            style={styles.courseImage}
         />

         <Text style={styles.price}>Price: R750</Text>

         <View style={styles.contentBox}>
            <Text style={styles.contentTitle}>Content:</Text>
            <Text style={styles.contentItem}>
               › Water restrictions and the watering requirements of indigenous
               and exotic plants. {"\n"}› Pruning and propagation of plants.{" "}
               {"\n"}› Planting techniques for different plant types.
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
      marginRight: 32,
      marginLeft: 15,
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

export default GardenScreen;
