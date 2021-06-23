import React, { useState } from "react";
import { View } from "react-native";

import pokemon from "./src/data/pokemon";
import pokemon_stats from "./src/data/pokemon-stats";

import Header from "./src/components/Header";
import CardList from "./src/components/CardList";
import AnimatedModal from "./src/components/AnimatedModal";
import BigCard from "./src/components/BigCard";

function getRandomInt(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

const App =({pokemon_stats})=> {
  const [ isModalVisible, setUsername] = useState(false);

  cardAction = () => {};

  viewAction = (pokemon, image) => {
    pokemon_stats = [];
    pokemon_stats.forEach(item => {
      pokemon_stats.push({
        label: item,
        value: getRandomInt(25, 150)
      });
    });
    setUsername({
      isModalVisible: true
    });
  };

  bookmarkAction = () => {};

  shareAction = () => {};

  closeModal = () => {
    setState({
      isModalVisible: false
    });
  };

    return (
      <View style={styles.container}>
        <Header title={"Poke-Gallery"} />
        <CardList
         data={pokemon}
         cardAction={cardAction}
         viewAction={viewAction}
         bookmarkAction={bookmarkAction}
         shareAction={shareAction}
        />
        <AnimatedModal
          title={"View Pokemon"}
          visible={isModalVisible}
          onClose={() => {
            setUsername({
              isModalVisible: false
            });
          }}
        >
          {/* <BigCard
            title={pokemon}
            image={image}
            data={stats}
          /> */}
        </AnimatedModal>
      </View>
    );
  }
const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
};
export default App;