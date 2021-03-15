import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { THEME } from "../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { removePost, toggleBooked } from "../store/actions/postAction";

export const PostScreen = ({ navigation, route }) => {
  const postId = route.params?.postId;
  const post = useSelector((state) =>
    state.post.allPosts.find((p) => p.id === postId)
  );

  const booked = useSelector((state) =>
    state.post.bookedPosts.some((post) => post.id === postId)
  );

  const date = route.params?.date;
  useEffect(() => {
    let iconName = booked ? "ios-star" : "ios-star-outline";

    navigation.setOptions({
      headerTitle: "Пост" + postId + new Date(date).toLocaleDateString(),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Take photo"
            iconName={iconName}
            onPress={toggleHandler}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, booked]);

  const dispatch = useDispatch();
  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(post));
  }, [dispatch, postId]);

  const removeHandler = () => {
    Alert.alert(
      "Удаление Поста",
      "Вы точно уверены?",
      [
        {
          text: "Отменить",
          style: "cancel",
        },
        {
          text: "OK",
          style: "destructive",
          onPress() {
            navigation.navigate("Main");
            dispatch(removePost(postId));
          },
        },
      ],
      { cancelable: false }
    );
  };

  if (!post) {
    return null;
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: post.img }} />
      <View style={styles.textWrap}>
        <Text tyle={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="Удалить"
        onPress={removeHandler}
        color={THEME.DANGER_COLOR}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    backgroundColor: "#000",
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: "open-regular",
  },
});
