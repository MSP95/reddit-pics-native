import React, { FC } from 'react';
import {StyleSheet, View} from "react-native";
import SearchPage from "./search-page";
import {commonStyles} from "../styles/common-styles";

const HomePage: FC<{navigation: any}> = ({ navigation }) => {
  return (
    <View style={commonStyles.container}>
      <SearchPage navigation={navigation} />
    </View>
  );
};

export default HomePage;