import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
};

export function Button({title, ...reset }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}
      {...reset}
    >
      <Text style={[styles.buttonText]}>
      {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5865EF",
    padding: 20,
    borderRadius: 7,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold"
  },
})