import React from "react";
import {
   View,
   Text,
   Image,
   TouchableOpacity,
   StyleSheet,
   ScrollView,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const SixWeekCoursesScreen = ({ navigation }) => {
   return (
      <View style={styles.container}>
         <Image source={require("../assets/logo1.png")} style={styles.logo} />

         <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Courses')} style={styles.backButton}>
               <Icon name="arrow-back" size={30} color="#000" />
            </TouchableOpacity>
            <Text style={styles.title}>Long Courses</Text>
         </View>

         <View style={styles.descriptionBox}>
            <Text style={styles.descriptionText}>
               The <Text style={styles.boldText}>Long Courses</Text> take place
               for a period of <Text style={styles.boldText}>6 months</Text>.
            </Text>
         </View>

         <ScrollView contentContainerStyle={styles.courseList}>
            <View style={styles.row}>
               <TouchableOpacity
                  style={styles.shortCourseCard}
                  onPress={() => navigation.navigate("First-aid")}
               >
                  <Image
                     style={styles.courseImage}
                     source={require("../assets/aid.webp")}
                  />
                  <Text style={styles.courseName}>First Aid</Text>
               </TouchableOpacity>

               <TouchableOpacity
                  style={styles.shortCourseCard}
                  onPress={() => navigation.navigate("Sewing")}
               >
                  <Image
                     style={styles.courseImage}
                     source={require("../assets/sewing.webp")}
                  />
                  <Text style={styles.courseName}>Sewing</Text>
               </TouchableOpacity>
            </View>

            <View style={styles.row}>
               <TouchableOpacity
                  style={styles.shortCourseCard}
                  onPress={() => navigation.navigate("Life-Skills")}
               >
                  <Image
                     style={styles.courseImage}
                     source={require("../assets/life.jpg")}
                  />
                  <Text style={styles.courseName}>Life Skills</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={styles.shortCourseCard}
                  onPress={() => navigation.navigate("Landscaping")}
               >
                  <Image
                     style={styles.courseImage}
                     source={require("../assets/Landscaping.jpg")}
                  />
                  <Text style={styles.courseName}>Landscaping</Text>
               </TouchableOpacity>
            </View>
         </ScrollView>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#E8DFF9",
   },
   header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
   },
   backButton: {
      marginRight: 126,
      marginLeft: 15
   },
   title: {
      fontSize: 32,
      fontWeight: "medium",
      color: "#000",
   },
   logo: {
      width: 100,
      height: 100,
      resizeMode: "contain",
      marginBottom: 20,
      alignSelf: "center",
      marginTop: 15,
   },
   descriptionBox: {
      marginBottom: 20,
      padding: 10,
      backgroundColor: "#f5f0fc",
      borderRadius: 10,
      marginLeft: 15,
      justifyContent: "center",
      alignItems: "center",
   },
   descriptionText: {
      fontSize: 16,
      color: "#333",
      textAlign: "center",
      width: 250
   },
   boldText: {
      fontWeight: "bold",
   },
   courseList: {
      paddingBottom: 20,
   },
   row: {
      flexDirection: "row",
      marginBottom: 20,
   },
   shortCourseCard: {
      marginRight: 20,
      marginTop: 20,
      marginLeft: 15,
   },
   courseImage: {
      width: 160,
      height: 160,
      borderRadius: 10,
   },
   courseName: {
      marginTop: 5,
      fontSize: 25,
      fontWeight: "bold",
      color: "black",
   },
});

export default SixWeekCoursesScreen;
