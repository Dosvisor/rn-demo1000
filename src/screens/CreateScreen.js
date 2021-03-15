import React, { useState, useRef } from "react";
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
import { PhotoPicker } from "../components/PhotoPicker";

export const CreateScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [pic, setPic] = useState(false);
  const imgRef = useRef();

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text: text,
      img: pic,
      booked: false,
    };
    dispatch(addPost(post));
    navigation.navigate("Main");
    setText("");
    setPic("");
  };
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: "Создание",
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
  const photoPickHandler = (uri) => {
    setPic(uri);
  };
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
          <PhotoPicker created={pic} onPick={photoPickHandler} />
          <Button
            title="Создать пост"
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
            disabled={!text || !pic}
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
