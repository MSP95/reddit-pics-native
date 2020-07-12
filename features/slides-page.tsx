import React, { FC, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { commonStyles } from "../styles/common-styles";
import { fetchPics } from "../api/api";
import { Dimensions } from "react-native";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SlidesPage: FC<{ route: any; navigation: any }> = ({
  route,
  navigation,
}) => {
  const { query } = route.params;
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetchPics(query).then((pics) => {
      setImages(pics.map((p: any) => p.url));
    });
  }, [route.params?.query]);
  const renderItem = ({ item }: any) => {
    return <Image resizeMode="contain" style={styles.image} source={{ uri: item }} />;
  };
  return (
    <View style={{ ...commonStyles.container, ...styles.container }}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  image: {
    width: undefined,
    height: SCREEN_HEIGHT
  },
});

export default SlidesPage;
