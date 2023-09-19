import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setrestaurants] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured" && _id==$id]{
        ...,
       restaurants[]->{
         ...,
         dishes[]->,
         type->{
           name
         }

    }
    }[0]`,
        { id: id }
      )
      .then((data) => {
        setrestaurants(data?.restaurants);
      });
  }, [id]);

  // console.log(restaurants);
  return (
    <View>
      <View
        // style={styles.view}>
        className="mt-4 flex-row items-center justify-between px-4"
      >
        <Text
          // style={styles.container}>
          className="font-bold text-lg"
        >
          {title}
        </Text>

        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text
        // style={styles.text}>
        className="text-xs text-gray-500 px-4"
      >
        {description}
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        // style={styles.scrollview}
        className="pt-4"
      >
        {/*Restaurant cards*/}
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imageUrl={restaurant.image}
            title={restaurant.name}
            genre={restaurant.type?.name}
            rating={restaurant.rating}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}

        {/* <RestaurantCard
          id={123}
          imageUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          genre="Japanese"
          rating={4.5}
          address="123 New Street"
          short_description="Short Description"
          dishes={[]}
          long={32}
          lat={67}
        />

        <RestaurantCard
          id={123}
          imageUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          genre="Japanese"
          rating={4.5}
          address="123 New Street"
          short_description="Short Description"
          dishes={[]}
          long={32}
          lat={67}
        />

        <RestaurantCard
          id={123}
          imageUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          genre="Japanese"
          rating={4.5}
          address="123 New Street"
          short_description="Short Description"
          dishes={[]}
          long={32}
          lat={67}
        />

        <RestaurantCard
          id={123}
          imageUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          genre="Japanese"
          rating={4.5}
          address="123 New Street"
          short_description="Short Description"
          dishes={[]}
          long={32}
          lat={67}
        /> */}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({
  container: {
    fontWeight: "bold",
    fontSize: 17,
  },
  view: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 10,
    color: "gray",
    paddingHorizontal: 10,
  },
  scrollview: {
    paddingTop: 4,
  },
});
