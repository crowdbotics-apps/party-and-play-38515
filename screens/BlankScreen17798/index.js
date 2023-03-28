import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const BlankScreen17798 = () => {
  const navigation = useNavigation();
  return <View style={_styles.BlankScreen17798}>
      <Pressable onPress={() => {
      navigation.navigate("login");
    }}><Text style={_styles.KbnasoWT}>Login </Text></Pressable></View>;
};

export default BlankScreen17798;

const _styles = StyleSheet.create({
  BlankScreen17798: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%",
    borderRadius: 5
  },
  KbnasoWT: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});