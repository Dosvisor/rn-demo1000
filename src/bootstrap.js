import * as Font from "expo-font";
import { DB } from "./db";

export async function bootstrap() {
  try {
    await Font.loadAsync({
      "open-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
      "open-regular": require("../assets/fonts/OpenSans-Regular.ttf"),
    });
    console.log("DataBase started");
    await DB.init();
  } catch (e) {
    console.log("Error", e);
  }
}
