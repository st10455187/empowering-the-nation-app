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
            <Text style={styles.title}>Short Courses</Text>
         </View>

         <View style={styles.descriptionBox}>
            <Text style={styles.descriptionText}>
               The <Text style={styles.boldText}>Short Courses</Text> take place
               for a period of <Text style={styles.boldText}>6 weeks</Text>.
            </Text>
         </View>

         <ScrollView contentContainerStyle={styles.courseList}>
            <View style={styles.row}>
               <TouchableOpacity
                  style={styles.shortCourseCard}
                  onPress={() => navigation.navigate("Cooking")}
               >
                  <Image
                     style={styles.courseImage}
                     source={require("../assets/cooking.webp")}
                  />
                  <Text style={styles.courseName}>Cooking</Text>
               </TouchableOpacity>

               <TouchableOpacity
                  style={styles.shortCourseCard}
                  onPress={() => navigation.navigate("Child-Minding")}
               >
                  <Image
                     style={styles.courseImage}
                     source={require("../assets/childminder.jpg")}
                  />
                  <Text style={styles.courseName}>Child Minding</Text>
               </TouchableOpacity>
            </View>

            <View style={styles.row}>
               <TouchableOpacity
                  style={styles.shortCourseCard}
                  onPress={() => navigation.navigate("Garden")}
               >
                  <Image
                     style={styles.courseImage}
                     source={require("../assets/garden.png")}
                  />
                  <Text style={styles.courseName}>Garden{"\n"}Maintenance</Text>
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
