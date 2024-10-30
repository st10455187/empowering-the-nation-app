import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import SixWeekCoursesScreen from './components/weeks';    
import ContactScreen from './components/contact';
import SixMonthCoursesScreen from './components/months';
import RegisterScreen from './components/register';
import CoursesScreen from './components/courses';
import CalculateFeesScreen from './components/calculator';
import AboutScreen from './components/about';
import SewingScreen from './components/sewing';
import LandscapingScreen from './components/landscaping';
import AidScreen from './components/first-aid';
import LifeScreen from './components/life-skills';
import CookingScreen from './components/cooking';
import GardenScreen from './components/garden';
import MinderScreen from './components/childminder';

// Home Screen Component

const popularCourses = [
  { id: '1', name: 'Landscaping', price: 'R1500', duration: '6 months', image: require('./assets/garden.png'), type: 'long' },
  { id: '2', name: 'Cooking', price: 'R750', price: 'R750', duration: '6 weeks', image: require('./assets/cooking.webp'), type: 'short' },
  { id: '3', name: 'Sewing', price: 'R1500', price: 'R1500', duration: '6 months', image: require('./assets/sewing.webp'), type: 'long' },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleCoursePress = (course) => {
    if (course.id === '1') {
      navigation.navigate('Landscaping');
    } if (course.id === '2') {
      navigation.navigate('Cooking');
    } else if (course.id === '3') {
      navigation.navigate('Sewing');
    }
  };

  const renderCourseItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.courseCard} 
      onPress={() => handleCoursePress(item)}  // Conditional navigation based on course type
    >
      <Image source={item.image} style={styles.courseImage} />
      <Text style={styles.courseName}>{item.name}</Text>
      <Text style={styles.coursePrice}>{item.price}</Text>
      <Text style={styles.coursePrice}>{item.duration}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.menuButton}
          onPress={() => navigation.openDrawer()}
        >
          <View style={styles.menuIcon} />
          <View style={[styles.menuIcon, { marginTop: 4 }]} />
          <View style={[styles.menuIcon, { marginTop: 4 }]} />
        </TouchableOpacity>
        <Image source={require('./assets/logo2.png')} style={styles.logo} />
      </View>

      <Text style={styles.title}>Home</Text>

      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>
          <Text style={styles.boldText}>Empowering The Nation</Text> is a small-
          to mid-size enterprise located in the 
          city of Johannesburg. The SME aims 
          to upskill the skills of domestic 
          workers and gardeners. It offers both 
          6-week short courses and 6-month 
          long courses to workers.
        </Text>
      </View>

      <Text style={styles.popularCoursesTitle}>Popular Courses</Text>

      <FlatList
        data={popularCourses}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.popularCoursesList}
      />
    </View>
  );
};

// Stack Navigator for Home
const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Sewing" component={SewingScreen} />
    <HomeStack.Screen name="Landscaping" component={LandscapingScreen} />
    <HomeStack.Screen name="First-aid" component={AidScreen} />
    <HomeStack.Screen name="Life-Skills" component={LifeScreen} />
    <HomeStack.Screen name="Cooking" component={CookingScreen} />
    <HomeStack.Screen name="Garden" component={GardenScreen} />
    <HomeStack.Screen name="Child-Minding" component={MinderScreen} />
    <HomeStack.Screen name="6-months" component={SixMonthCoursesScreen} />
    <HomeStack.Screen name="6-weeks" component={SixWeekCoursesScreen} />
  </HomeStack.Navigator>
);

// Tab Navigator
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size, focused }) => { // focused is available here
        let iconName;
        switch (route.name) {
          case 'Home': iconName = 'home-outline'; break;
          case 'Courses': iconName = 'book-outline'; break;
          case 'Register': iconName = 'person-add-outline'; break;
          case 'Contact': iconName = 'call-outline'; break;
        }
        return (
          <Icon
            name={iconName}
            size={size}
            color={color}
            style={{ opacity: focused ? 1 : 0.5 }} // Set opacity based on focused state
          />
        );
      },
      tabBarActiveTintColor: '#6117EB',  // Brighter purple when active
      tabBarInactiveTintColor: '#7F3DFF', // Same purple but with opacity when inactive
      tabBarStyle: {
        backgroundColor: '#E8DFF9',
        borderRadius: 10,
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeStackScreen} />
    <Tab.Screen name="Courses" component={CoursesScreen} />
    <Tab.Screen name="Register" component={RegisterScreen} />
    <Tab.Screen name="Contact" component={ContactScreen} />
  </Tab.Navigator>
);


// Drawer Navigator
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      {/* Logo at the top */}
      <View>
        <Image
          source={require('./assets/EMPOWERING (2).png')} // Adjust this path to your logo
          style={styles.logo}
        />
      </View>

      {/* Drawer items */}
      <DrawerItemList {...props} />

      {/* Footer text */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Developed by Skill Builders</Text>
      </View>
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="HomeTabs"
    screenOptions={{
      drawerStyle: { backgroundColor: '#7F3DFF' },
      drawerActiveTintColor: 'white',
      drawerInactiveTintColor: '#dedede',
      headerShown: false,
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />} // Use custom content
  >
    <Drawer.Screen
      name="Home" 
      component={TabNavigator} 
      options={{ drawerIcon: ({ color, size }) => 
      <Icon name="home-outline" size={size} color={color} /> 
       }} 
    />
    <Drawer.Screen
      name="SixWeekCourses" 
      component={SixWeekCoursesScreen} 
      options={{ drawerIcon: ({ color, size }) => 
      <Icon name="time-outline" size={size} color={color} /> 
      }} 
    />
    <Drawer.Screen
      name="SixMonthCourses" 
      component={SixMonthCoursesScreen} 
      options={{ drawerIcon: ({ color, size }) => 
      <Icon name="calendar-outline" size={size} color={color} /> 
      }} 
    />
    <Drawer.Screen
      name="CalculateFees" 
      component={CalculateFeesScreen} 
      options={{ drawerIcon: ({ color, size }) => 
      <Icon name="calculator-outline" size={size} color={color} /> 
      }} 
    />
        <Drawer.Screen
      name="Contact" 
      component={ContactScreen} 
      options={{ drawerIcon: ({ color, size }) => 
      <Icon name="call-outline" size={size} color={color} /> 
       }} 
    />
        <Drawer.Screen
      name="About" 
      component={AboutScreen} 
      options={{ drawerIcon: ({ color, size }) => 
      <Icon name="information-circle-outline" size={size} color={color} /> 
       }} 
    />
  </Drawer.Navigator>
);

// Main App Component
const App = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);

export default App;

// Styles
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#E8DFF9', 
    padding: 20 
  },
  logo: {
    width: 220,
    height: 220,
    alignSelf: 'center',
    borderRadius: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuButton: { 
    width: 40, 
    height: 40, 
    justifyContent: 'center', 
    alignItems: 'flex-start', 
    marginRight: 15,
  },
  menuIcon: { 
    width: 20, 
    height: 2, 
    backgroundColor: '#000', 
    borderRadius: 1 
  },
  title: { 
    fontSize: 42, 
    fontWeight: 'medium', 
    color: '#000',
    marginBottom: 20,
    marginTop: -15,
  },
  descriptionBox: { 
    backgroundColor: '#f5f0fc',
    borderRadius: 10, 
    padding: 15, 
    marginBottom: 20 
  },
  descriptionText: { 
    fontSize: 15, 
    color: '#333',
    lineHeight: 20,
    textAlign: 'center'
  },
  boldText: { 
    fontWeight: 'bold' 
  },
  popularCoursesTitle: { 
    fontSize: 18, 
    fontWeight: 'medium', 
    color: 'black', 
    marginBottom: 15,
    marginTop: 20,
  },

  courseCard: { 
    backgroundColor: '#f5f0fc', 
    borderRadius: 10, 
    padding: 10,
    width: 120,
    marginRight: 10,
    height: 200
  },
  courseImage: { 
    width: 100, 
    height: 100, 
    borderRadius: 10, 
    marginBottom: 10 
  },
  courseName: { 
    fontSize: 16, 
    fontWeight: 'bold',
    color: 'black' 
  },
  coursePrice: { 
    fontSize: 14, 
    color: 'black' 
  },
  footer: {
    marginTop: 'auto', // Push to the bottom
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.5,
  },
});