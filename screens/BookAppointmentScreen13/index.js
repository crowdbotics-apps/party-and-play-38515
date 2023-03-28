import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BookAppointmentScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <Pressable onPress={() => {
      navigation.navigate("OrderDetails29");
    }}><Text style={styles.headingTxt}>Book Appointment Screen</Text></Pressable>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    justifyContent: "space-around"
  },
  headingTxt: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12
  }
});
export default BookAppointmentScreen;