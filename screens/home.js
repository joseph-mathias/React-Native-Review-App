import React, { useState } from "react";
import { globalStyles } from "../styles/global";
import { View, Text, FlatList, TouchableOpacity } from "react-native-web";

export default function Home({ navigation }) {
  const [review, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Catch Them All (Again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: "Not so 'Final' Fantasy",
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
    {
      title: "Tall Girl Two",
      rating: 6,
      body: "lorem ipsum",
      key: "4",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={review}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Review Details", item)}
          >
            <Text style={globalStyles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
