import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import GradientText from "./src/components/GradientText";
export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        // end={{ x: 0, y: 1 }}
        // Background Linear Gradient
        colors={["#F68989", "#FE5150"]}
        style={styles.background}
      />
      <StatusBar />
      <Image
        style={styles.deliveryMan}
        source={require("assets/images/delivery-man.png")}
      />
      <View style={styles.card}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          Quick Delivery at
        </Text>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={styles.cardTitle} numberOfLines={1}>
            your
          </Text>
          <GradientText
            colors={["#F68989", "#FE5150"]}
            style={[styles.cardTitle, { marginLeft: 10 }]}
          >
            Doorstep
          </GradientText>
        </View>
        <Text style={styles.cardDesc}>
          Home delivery and online reservation system for restaurant and cafe
        </Text>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          // end={{ x: 0, y: 1 }}
          // Background Linear Gradient
          colors={["#F68989", "#FE5150"]}
          style={styles.cardButtonBg}
        >
          <View style={styles.cardButton}>
            <Text style={styles.cardButtonText}>Get Started</Text>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.linearColors.bg,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get("screen").height,
  },
  deliveryMan: {
    marginTop: 32,
  },
  card: {
    marginHorizontal: 30,
    height: 300,
    paddingHorizontal: 25,
    paddingTop: 41,
    paddingBottom: 24,
    borderRadius: 26,
    shadowColor: "rgba(0, 0, 0, 0.34)",
    elevation: 10,
    backgroundColor: "white",
  },
  cardTitle: {
    fontWeight: "600",
    fontSize: 31,
    alignSelf: "center",
    color: "#4F4F4F",
    lineHeight: 31,
    // backgroundColor: "red",
  },
  cardDesc: {
    color: "#BDBDBD",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 11,
  },
  cardButtonBg: {
    height: 68,
    marginTop: 31,
    borderRadius: 40,
  },
  cardButton: {
    flex: 1,
    justifyContent: "center",
    height: 68,

    borderRadius: 40,
    textAlign: "center",
    alignItems: "center",
  },
  cardButtonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
});
