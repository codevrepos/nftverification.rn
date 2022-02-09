import React from "react";
import { useMoralis } from "react-moralis";
import { useWalletConnect } from "./WalletConnect";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LogBox } from "react-native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SplashScreen from "./Components/SplashScreen";
import CryptoAuth from "./Components/CryptoAuth";
import Header from "./Components/Header";

// import Assets from "./Components/Assets/Assets";
// import RecentTransactions from "./Components/RecentTransactions/RecentTransactions";
// import NFTAssets from "./Components/NFT/NFTAssets";
// import Transfer from "./Components/Transfer/Transfer";
// import Profile from "./Components/Profile/Profile";

import Tickets from './Components/Tickets/Tickets';
import Camera from './Components/Camera/Camera';
import Settings from './Components/Settings/Settings';

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCreditCard,
  faCoins,
  faUser,
  faPaperPlane,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

import Moralis from "moralis/types";

LogBox.ignoreAllLogs();

// const Activecolor =
function Home(): JSX.Element {
  return (
    <Tab.Navigator
      shifting={false}
      activeColor="#315399"
      // inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="Tickets"
        options={{
          tabBarLabel: "Tickets",
          tabBarIcon: ({ color, focused }) => {
            return <FontAwesomeIcon icon={faCoins} color={color} size={20} />;
          },
        }}
        component={Tickets}
      />
      <Tab.Screen
        name="Camera"
        options={{
          tabBarLabel: "Camera",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faCreditCard} color={color} size={20} />
          ),
        }}
        component={Camera}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, focused }) => {
            return <FontAwesomeIcon icon={faRocket} color={color} size={20} />;
          },
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

  switch (routeName) {
    // case "Assets":
    //   return "Assets";
    // case "Transfer":
    //   return "Transfer";
    // case "Transactions":
    //   return "Transactions";
    // case "Profile":
    //   return "Profile";
    case "Tickets":
      return "Tickets";
    case "Camera":
      return "Camera";
    case "Settings":
      return "Settings";
  }
}

function App(): JSX.Element {
  const connector = useWalletConnect();
  const {
    authenticate,
    authError,
    isAuthenticating,
    isAuthenticated,
    logout,
    Moralis,
  } = useMoralis();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false
        }}>
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={CryptoAuth}
          options={{ headerShown: false }}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={Home}
          // Hiding header for Navigation Drawer
          // options={{ headerTitle: (props) => <Header /> }}
          // options={({ route }) => ({
          //   headerTitle: getHeaderTitle(route),
          // })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
