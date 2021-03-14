import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput,
  Image,
  Button,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { THEME } from "../theme";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { addPost } from "../store/actions/postAction";

export const CreateScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const img =
    "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg";

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text: text,
      img: img,
      booked: false,
    };
    dispatch(addPost(post));
    navigation.navigate("Main");
  };
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: "Создание",
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

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создай новый пост</Text>
          <TextInput
            style={styles.textarea}
            placeholder="Введите текст заметки"
            value={text}
            onChangeText={setText}
            multiline
          />
          <Image
            style={{ width: "100%", height: 200, marginBottom: 10 }}
            source={{
              uri: img,
            }}
          />
          <Button
            title="Создать пост"
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "open-regular",
    marginVertical: 10,
  },
  textarea: {
    padding: 10,
    marginBottom: 10,
  },
});
