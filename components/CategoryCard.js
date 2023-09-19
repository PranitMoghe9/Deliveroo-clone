import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity
      // style={{position:'relative',marginRight:2}}>
      className="relative mr-2"
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        // style={{width:80,height:80,marginRight:3,borderRadius:5}}

        className="h-20 w-20 rounded"
      />
      <Text
        // style={{color:'white',fontWeight:'bold',position:'absolute',bottom:1,left:1}}>
        className="absolute bottom-1 left-1 text-gray-100 font-bold"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

// const styles = StyleSheet.create({})
