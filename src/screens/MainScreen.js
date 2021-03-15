import React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../components/Post";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";
import { loadPosts } from "../store/actions/postAction";
import { THEME } from "../theme";

export const MainScreen = ({ navigation, route }) => {
  const openPostHandler = (post) => {
    navigation.navigate("Post", { postId: post.id, date: post.date });
  };

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: "Мой блог",
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
            title="Drawer"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadPosts()); //Диспатчим экшн
  }, [dispatch]);

  const allPosts = useSelector((state) => state.post.allPosts);
  const loading = useSelector((state) => state.post.loading);
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={THEME.MAIN_COLOR} />
      </View>
    );
  }
  return <PostList data={allPosts} onOpen={openPostHandler} />;
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
