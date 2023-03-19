import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import firebaseConfig from "./firebaseConfig";
import Login from "./screens/Login";
import MortgageCalculator from "./screens/MortgageCalculator";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import CustomHeader from "./components/CustomHeader";

const Stack = createNativeStackNavigator();

const app = firebase.initializeApp(firebaseConfig);

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const handleLogout = () => {
    app.auth().signOut();
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name="MortgageCalculator"
            component={MortgageCalculator}
            options={{
              headerTitle: (props) => (
                <CustomHeader email={user.email} onLogout={handleLogout} />
              ),
            }}
          />
        ) : (
          <Stack.Screen name="Login" component={Login} firebase />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
