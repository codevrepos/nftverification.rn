import React, {useContext} from 'react';
import {useMoralis} from 'react-moralis';
import {useWalletConnect} from './WalletConnect';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LogBox, TouchableOpacity} from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import SplashScreen from './Components/SplashScreen';
import CryptoAuth from './Components/CryptoAuth';
import {Header} from './Components/Header/Header';

import TicketsStackNavigator from './Components/Tickets/TicketsStackNavigator';
import Camera from './Components/Camera/Camera';
import Settings from './Components/Settings/Settings';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faQrcode, faTicketAlt, faEdit} from '@fortawesome/free-solid-svg-icons';
import Toast from 'react-native-toast-message';
import {toastConfig} from './Components/Toast/ToastCustom';
import ScannerModal from './Components/ScannerModal/ScannerModal';

import {ModalContext} from './providers/ModalProvider';
import {useNavigation} from '@react-navigation/core';

LogBox.ignoreAllLogs();

function Home(): JSX.Element {
  const {isCameraTabModalOpen, setIsCameraTabModalOpen} = useContext(
    ModalContext,
  );
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      shifting={false}
      activeColor="#315399"
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="Tickets"
        options={{
          tabBarLabel: 'Tickets',
          tabBarIcon: ({color, focused}) => {
            return (
              <FontAwesomeIcon icon={faTicketAlt} color={color} size={20} />
            );
          },
        }}
        component={TicketsStackNavigator}
      />
      <Tab.Screen
        name="Scan"
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faQrcode} color={color} size={20} />
          ),
        }}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            setIsCameraTabModalOpen(true);
          },
        }}
        component={Camera}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, focused}) => {
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
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Tickets':
      return 'Tickets';
    case 'Camera':
      return 'Camera';
    case 'Settings':
      return 'Settings';
  }
}

function App(props): JSX.Element {
  const connector = useWalletConnect();
  const {
    authenticate,
    authError,
    isAuthenticating,
    isAuthenticated,
    logout,
    Moralis,
  } = useMoralis();
  const {isCameraTabModalOpen, setIsCameraTabModalOpen} = useContext(
    ModalContext,
  );

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Auth"
            component={CryptoAuth}
            options={{headerShown: false}}
          />
          {/* TODO: add area for modals, controllable by context */}
          <Stack.Screen
            name="DrawerNavigationRoutes"
            component={Home}
            options={{
              headerTitle: props => <Header />,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Camera"
            component={Camera}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
        <ScannerModal
          isCameraTabModalOpen={isCameraTabModalOpen}
          setIsCameraTabModalOpen={setIsCameraTabModalOpen}
        />
      </NavigationContainer>
      <Toast position="bottom" bottomOffset={120} config={toastConfig} />
    </>
  );
}

export default App;
