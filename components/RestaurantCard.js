import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  imageUrl,
  title,
  genre,
  rating,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imageUrl,
          title,
          genre,
          rating,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
    >
      {/*Image*/}
      <Image
        source={{
          //uri: imageUrl,
          uri: urlFor(imageUrl).url(),
        }}
        //   style={{width:36,height:36}}
        className="h-36 w-64 rounded-sm"
      />
      {/*text---title*/}
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text>. {genre}
          </Text>
        </View>

        {/*Location marker */}
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" size={22} opacity={0.4} />
          <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  image: {
    height: 36,
    width: 36,
    borderRadius: 10,
  },
});
