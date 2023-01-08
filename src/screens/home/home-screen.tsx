import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Banner } from "~components/shared/banner";
import { COMMON_STYLES } from "~theme/common-styles";
import { appStorage, AppStorageKeys } from "~utils";
import { countToStr } from "./helpers";

function HomeScreen() {
  return (
    <View style={style.container}>
      <Text style={style.title}>What's The Occasion?</Text>
      <View style={style.item_container}>
        <TouchableOpacity style={style.touchable_container}>
          <View style={style.item}>
            <View style={style.sub_item}>
              <FontAwesome5 name="home" style={COMMON_STYLES.COMMON_ICON_STYLES}></FontAwesome5>
              <Text style={style.item_text}>Home</Text>
            </View>
            <FontAwesome5 name="chevron-right" style={COMMON_STYLES.COMMON_ICON_STYLES}></FontAwesome5>
          </View>
        </TouchableOpacity>
        <View style={{ height: 5 }}></View>
        <TouchableOpacity style={style.touchable_container}>
          <View style={style.item}>
            <View style={style.sub_item}>
              <FontAwesome5 name="briefcase" style={COMMON_STYLES.COMMON_ICON_STYLES}></FontAwesome5>
              <Text style={style.item_text}>Professional</Text>
            </View>
            <FontAwesome5 name="chevron-right" style={COMMON_STYLES.COMMON_ICON_STYLES}></FontAwesome5>
          </View>
        </TouchableOpacity>
        <View style={{ height: 5 }}></View>
        <TouchableOpacity style={style.touchable_container}>
          <View style={style.item}>
            <View style={style.sub_item}>
              <FontAwesome5 name="graduation-cap" style={COMMON_STYLES.COMMON_ICON_STYLES}></FontAwesome5>
              <Text style={style.item_text}>Educational</Text>
            </View>
            <FontAwesome5 name="chevron-right" style={COMMON_STYLES.COMMON_ICON_STYLES}></FontAwesome5>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
  item_container: {
    width: "100%",
    marginTop: 20,
    padding: 10
  },
  title: {
    fontSize: 24,
    color: "black",
    textAlign: "center",
    fontWeight: 'bold',
    marginTop: 10,
  },
  item_text: {
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  sub_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  touchable_container: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 7,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default HomeScreen;
