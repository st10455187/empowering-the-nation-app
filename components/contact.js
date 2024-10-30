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

const ContactScreen = () => {
   const handleCallPress = () => {
      Linking.openURL("tel:0182765443").catch(() =>
         Alert.alert("Error", "Unable to open dialer")
      );
   };

   const handleCallButton = () => {
      Linking.openURL("tel:0184633478").catch(() =>
         Alert.alert("Error", "Unable to open dialer")
      );
   };

   const handleEmailPress = () => {
      Linking.openURL("mailto:precious@etn.co.za").catch(() =>
         Alert.alert("Error", "Unable to open email client")
      );
   };

   const handleEmailClick = () => {
      Linking.openURL("mailto:info@etn.co.za").catch(() =>
         Alert.alert("Error", "Unable to open email client")
      );
   };

   const handleLocationPress = () => {
      Linking.openURL(
         "https://maps.google.com/?q=3 Benmore Road Johannesburg"
      ).catch(() => Alert.alert("Error", "Unable to open Maps"));
   };

   const handleLocationPress1 = () => {
      Linking.openURL("https://maps.app.goo.gl/1VfjXHX5zFdwqMtU8").catch(() =>
         Alert.alert("Error", "Unable to open Maps")
      );
   };

   const handleLocationPress2 = () => {
      Linking.openURL("https://maps.app.goo.gl/sQQwAziRK1GrsDdU9").catch(() =>
         Alert.alert("Error", "Unable to open Maps")
      );
   };

   return (
      <ScrollView style={styles.container}>
         <Image source={require("../assets/logo1.png")} style={styles.logo} />
         <Text style={styles.title}>Contact Us</Text>
         <Text style={styles.subtitle}>
            Don't hesitate to contact us for more information regarding the
            courses we offer. Our team is available to assist you.
         </Text>

         <View style={styles.cardContainer}>
            <TouchableOpacity
               style={styles.contactCard}
               onPress={handleCallPress}>
               <View style={styles.iconBg}>
                  <Icon name="call-outline" size={30} color="white" />
               </View>
               <View style={styles.contactText}>
                  <Text style={styles.contactHeading}>Call us</Text>
                  <Text style={styles.contactInfo}>018 276 5443</Text>
                  <Text style={styles.contactInfo}>018 463 3478</Text>
               </View>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.contactCard}
               onPress={handleEmailClick}>
               <View style={styles.iconBg}>
                  <Icon name="mail-outline" size={30} color="white" />
               </View>
               <View style={styles.contactText}>
                  <Text style={styles.contactHeading}>Email us</Text>
                  <Text style={styles.contactInfo}>precious@etn.co.za</Text>
                  <Text style={styles.contactInfo}>info@etn.co.za</Text>
               </View>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.contactCard}
               onPress={handleLocationPress}>
               <View style={styles.iconBg}>
                  <Icon name="location-outline" size={30} color="white" />
               </View>
               <View style={styles.contactText}>
                  <Text style={styles.contactHeading}>Our location</Text>
                  <Text style={styles.contactInfo}>3 Benmore Road</Text>
                  <Text style={styles.contactInfo}>Johannesburg</Text>
               </View>
            </TouchableOpacity>

            <View style={styles.contactCard}>
               <View style={styles.iconBg}>
                  <Icon name="time-outline" size={30} color="white" />
               </View>
               <View style={styles.contactText}>
                  <Text style={styles.contactHeading}>Work hours</Text>
                  <Text style={styles.contactInfo}>Mon-Fri • 9-17</Text>
               </View>
            </View>
         </View>

         <Text style={styles.locationText}>Our Other Locations</Text>

         <TouchableOpacity onPress={handleLocationPress1}>
            <Image
               source={require("../assets/vcMD.png")}
               style={styles.googleMaps}
            />
         </TouchableOpacity>

         <TouchableOpacity onPress={handleLocationPress2}>
            <Image
               source={require("../assets/vcSD.png")}
               style={styles.googleMaps}
            />
         </TouchableOpacity>
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
      marginBottom: 10,
      marginLeft: 15,
   },
   subtitle: {
      fontSize: 16,
      color: "#555",
      marginBottom: 20,
      marginLeft: 15,
   },
   cardContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
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

export default ContactScreen;
