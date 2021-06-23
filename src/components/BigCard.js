import React from "react";
import { View, Text, Image } from "react-native";
import DataRow from "./DataRow";
 const BigCard =({ image, title, data })=>{

    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Image source={image} style={styles.image} resizeMode={"contain"} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
        {data && (
          <View style={styles.dataContainer}>{this.renderDataRows(data)}</View>
        )}
      </View>
    );
        }

  renderDataRows = data => {
    return data.map((item, index) => {
      return (
        <DataRow
          label={item.label}
          value={item.value}
          index={index}
          key={item.label}
        />
      );
    });
  };


const styles = {
  container: {
    flex: 1
  },
  title: {
    fontSize: 25,
    fontWeight: "bold"
  },
  mainContainer: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  image: {
    width: 200,
    height: 150
  },
  dataContainer: {
    flex: 2,
    flexDirection: "column",
    padding: 20
  }
};
export default BigCard;