import React, { FC, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const SearchPage: FC<{ navigation: any }> = ({ navigation }) => {
  const [value, setValue] = useState<string>("");
  const handleChange = (text: React.SetStateAction<string>) => {
    setValue(text);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>RedditSlide</Text>
      <TextInput
        style={styles.searchInput}
        value={value}
        onChangeText={handleChange}
      />
      <Button
        title={"Search"}
        onPress={() => navigation.navigate("Slides", { query: value })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    display: "flex",
  },
  header: {
    fontSize: 40,
    color: "white",
    alignSelf: "center",
  },
  searchInput: {
    width: "100%",
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 6,
    color: "black",
  },
});
export default SearchPage;
