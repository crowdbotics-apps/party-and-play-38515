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
    }}><Text style={_styles.KbnasoWT}>Login </Text></Pressable><Pressable onPress={() => {
      navigation.navigate("login");
    }}><Text style={_styles.rSJJAwqH}>Sign up 
    </Text></Pressable><Pressable onPress={() => {
      navigation.navigate("MapLiveTrackingScreen18");
    }}><Text style={_styles.byoCoQtV}>Map 

    </Text></Pressable><Pressable onPress={() => {
      navigation.navigate("MessagesListingScreen16");
    }}><Text style={_styles.CZvFnBmU}>Messages 


    </Text></Pressable><Pressable onPress={{}}><Text style={_styles.IcrWNjDD}>Notifications 


    </Text></Pressable><Text style={_styles.kZQuwfor}>Settings 


    </Text></View>;
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
  },
  rSJJAwqH: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  byoCoQtV: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  CZvFnBmU: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  IcrWNjDD: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  kZQuwfor: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});