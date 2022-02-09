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
import { Header } from "./Components/Header/Header";

import TicketsStackNavigator from './Components/Tickets/TicketsStackNavigator';
import Camera from './Components/Camera/Camera';
import Settings from './Components/Settings/Settings';

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faQrcode,
  faTicketAlt,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

LogBox.ignoreAllLogs();

function Home(): JSX.Element {
  return (
    <Tab.Navigator
      shifting={false}
      activeColor="#315399"
      barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="Tickets"
        options={{
          tabBarLabel: "Tickets",
          tabBarIcon: ({ color, focused }) => {
            return <FontAwesomeIcon icon={faTicketAlt} color={color} size={20} />;
          },
        }}
        component={TicketsStackNavigator}
      />
      <Tab.Screen
        name="Scan"
        options={{
          tabBarLabel: "Scan",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faQrcode} color={color} size={20} />
          ),
        }}
        component={Camera}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, focused }) => {
            return <FontAwesomeIcon icon={faEdit} color={color} size={20} />;
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
        >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={CryptoAuth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={Home}
          options={{ 
            headerTitle: (props) => <Header />,
            headerShown: false
           }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
