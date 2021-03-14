import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { StyleSheet } from "react-native";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";

export const BookedScreen = ({ navigation, route }) => {
  const openPostHandler = (post) => {
    navigation.navigate("Post", { postId: post.id, date: post.date });
  };

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: "Избранное",
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Take photo"
            iconName="ios-camera"
            onPress={() => navigation.navigate("Create")}
          />
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Drower"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const bookedPosts = useSelector((state) =>
    state.post.allPosts.filter((post) => post.booked)
  );

  return <PostList data={bookedPosts} onOpen={openPostHandler} />;
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
