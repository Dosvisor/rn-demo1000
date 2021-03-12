import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { DATA } from "../data";
import { Post } from "../components/Post";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";

export const MainScreen = ({ navigation, route }) => {
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
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return <PostList data={DATA} onOpen={openPostHandler} />;
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
