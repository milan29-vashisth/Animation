import React from "react";
import { View } from "react-native";

const AnimatedBar =({value})=> {
    let widthStyle = { width: value };
    return <View style={[styles.bar, widthStyle]} />;
  }


const styles = {
  bar: {
    height: 15,
    borderWidth: 1,
    borderColor: "#c72f06",
    backgroundColor: "#e75832"
  }
};
export default AnimatedBar
