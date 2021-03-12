import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { StyleSheet } from "react-native";
import { DATA } from "../data";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";

export const BookedScreen = ({ navigation, route }) => {
  const openPostHandler = (post) => {
    navigation.navigate("Post", { postId: post.id, date: post.date });
  };

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: "Main",
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Take photo"
            iconName="ios-camera"
            onPress={() => console.log("Press photo")}
          />
        </HeaderButtons>
        // <Ionicons name="ios-camera" size={24} color="black" />
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Drower"
            iconName="ios-menu"
            onPress={() => console.log("Press drower")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  const data = DATA.filter((post) => post.booked);
  return <PostList data={data} onOpen={openPostHandler} />;
};

// MainScreen.navigationOptions = {
//   title: "hello",
//   headerRight: () => (
//     <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
//       <Item
//         title="camera-sharp"
//         iconName="md-camera-sharp"
//         onPress={() => {
//           console.log("take foto");
//         }}
//       />
//     </HeaderButtons>
//   ),
// };
const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});
