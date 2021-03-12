import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { DATA } from "../data";
import { THEME } from "../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const PostScreen = ({ navigation, route }) => {
  const postId = route.params?.postId;
  const post = DATA.find((p) => p.id === postId);
  const date = route.params?.date;
  React.useLayoutEffect(() => {
    const iconName = post.booked ? "ios-star" : "ios-star-outline";
    navigation.setOptions({
      headerTitle: "Пост Пост" + postId + new Date(date).toLocaleDateString(),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Take photo"
            iconName={iconName}
            onPress={() => console.log("Press photo")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const removeHandler = () => {
    Alert.alert(
      "Удаление Поста",
      "Вы точно уверены?",
      [
        {
          text: "Отменить",
          style: "cancel",
        },
        { text: "OK", style: "destructive", onPress: () => () => {} },
      ],
      { cancelable: false }
    );
  };
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

// PostScreen.navigationOptions = ({ navigation, route }) => {
//
// };

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
