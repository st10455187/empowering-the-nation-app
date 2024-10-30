import React from "react";
import {
   ScrollView,
   View,
   Text,
   TouchableOpacity,
   StyleSheet,
   Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// Courses Screen Component
const CoursesScreen = ({ navigation }) => {
   return (
      <ScrollView style={styles.container}>
         {/* 6-Week Courses */}
         <Image source={require("../assets/logo1.png")} style={styles.logo} />
         <Text style={styles.title}>Courses</Text>

         <View style={styles.container}>
            <View style={styles.summaryCard}>
               <View style={styles.durationCard}>
                  <Text style={styles.sixText}>6</Text>
                  <Text style={styles.timeText}>Week</Text>
                  <Text style={styles.monthText}>Courses</Text>
               </View>
               <View style={styles.courseInfo}>
                  <Text style={styles.courseText}> › Cooking</Text>
                  <Text style={styles.courseText}> › Child Minding</Text>
                  <Text style={styles.courseText}> › Garden Maintenance</Text>

                  <TouchableOpacity
                     style={styles.detailsButton1}
                     onPress={() => navigation.navigate("SixWeekCourses")}>
                     <Text style={styles.detailText}>Details</Text>
                     <Icon
                        name="arrow-forward-circle-outline"
                        size={25}
                        color="#7F3DFF"
                     />
                  </TouchableOpacity>
               </View>
            </View>

            <View style={styles.summaryCard2}>
               <View style={styles.summaryCard}>
                  <View style={styles.durationCard}>
                     <Text style={styles.sixText}>6</Text>
                     <Text style={styles.timeText}>Month</Text>
                     <Text style={styles.monthText}>Courses</Text>
                  </View>
                  <View style={styles.courseInfo}>
                     <Text style={styles.courseText}> › Sewing</Text>
                     <Text style={styles.courseText}> › First Aid</Text>
                     <Text style={styles.courseText}> › Life Skills</Text>
                     <Text style={styles.courseText}> › Landscaping</Text>

                     <TouchableOpacity
                        style={styles.detailsButton2}
                        onPress={() => navigation.navigate("SixMonthCourses")}>
                        <Text style={styles.detailText}>Details</Text>
                        <Icon
                           name="arrow-forward-circle-outline"
                           size={25}
                           color="#7F3DFF"
                        />
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
         </View>

         {/* Discounts */}
         <View style={styles.discountSection}>
            <Text style={styles.discountTitle}>Our Discounts</Text>
            <Text style={styles.discountText}>
               2 Courses :<Text style={styles.boldText}> 5% OFF</Text>
            </Text>
            <Text style={styles.discountText}>
               3 Courses :<Text style={styles.boldText}> 10% OFF</Text>
            </Text>
            <Text style={styles.discountText}>
               3+ Courses :<Text style={styles.boldText}> 15% OFF</Text>
            </Text>
         </View>
      </ScrollView>
   );
};

// Styles for the screen
const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 16,
      backgroundColor: "#E8DFF9",
   },
   title: {
      fontSize: 42,
      fontWeight: "medium",
      color: "#000",
      marginBottom: 20,
      marginLeft: 15,
   },
   logo: {
      width: 100,
      height: 100,
      resizeMode: "contain",
      marginBottom: 20,
      alignSelf: "center",
      marginTop: 15,
   },
   summaryCard: {
      backgroundColor: "white",
      width: 350,
      height: 145,
      borderRadius: 15,
   },
   durationCard: {
      backgroundColor: "#cfbaf7",
      width: 145,
      height: 145,
      borderRadius: 15,
   },
   sixText: {
      fontWeight: "bold",
      fontSize: 50,
      marginTop: 6,
      textAlign: "center",
   },
   timeText: {
      fontWeight: "bold",
      fontSize: 25,
      textAlign: "center",
      marginTop: -10,
   },
   monthText: {
      fontSize: 25,
      textAlign: "center",
      marginTop: -10,
   },
   courseInfo: {
      marginLeft: 150,
      marginTop: -135,
   },
   courseText: {
      fontSize: 17,
      color: "#717171",
   },
   summaryCard2: {
      marginTop: 30,
   },
   detailText: {
      color: "#6117EB",
      fontWeight: "bold",
      marginRight: 5,
      fontSize: 17,
   },
   detailsButton1: {
      flexDirection: "row",
      marginTop: 35,
      marginLeft: 90,
   },
   detailsButton2: {
      flexDirection: "row",
      marginTop: 15,
      marginLeft: 90,
   },
   discountSection: {
      marginTop: 20,
      marginLeft: 20,
   },
   discountTitle: {
      fontSize: 30,
      marginBottom: 10,
   },
   discountText: {
      fontSize: 18,
   },
   boldText: {
      fontWeight: "bold",
   },
});

export default CoursesScreen;
