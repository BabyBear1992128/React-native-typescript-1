import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { COMMON_STYLES } from "~theme/common-styles";

function ItemsScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>

          <View style={style.title_container}>
            <FontAwesome5
              name="shopping-basket"
              style={[COMMON_STYLES.COMMON_ICON_STYLES, { fontSize: 24 }]}
            />

            <Text style={style.title}>Ingredient(3)</Text>

            <FontAwesome5
              name="plus"
              style={COMMON_STYLES.COMMON_ICON_STYLES}
            />
          </View>

          <View style={style.item_container}>
            <TouchableOpacity style={style.touchable_container}>
              <View style={style.item}>
                <Text style={style.item_text}>
                  Pineapple chunks
                </Text>
                <FontAwesome5
                  name="pen"
                  style={COMMON_STYLES.COMMON_ICON_STYLES}
                />
              </View>
            </TouchableOpacity>

            <View style={{ height: 5 }} />

            <TouchableOpacity style={style.touchable_container}>
              <View style={style.item}>
                <Text style={style.item_text}>Onion</Text>

                <Text style={style.small_text}>1x</Text>
              </View>
            </TouchableOpacity>

            <View style={{ height: 5 }} />

            <TouchableOpacity style={style.touchable_container}>
              <View style={style.item}>
                <Text style={style.item_text}>Sweet Yellow Pepper</Text>

                <Text style={style.small_text}>1/4 cup</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={style.title_container}>
            <FontAwesome5
              name="utensils"
              style={[COMMON_STYLES.COMMON_ICON_STYLES, { fontSize: 24 }]}
            />

            <Text style={style.title}>Kitchenware(2)</Text>

            <FontAwesome5
              name="plus"
              style={COMMON_STYLES.COMMON_ICON_STYLES}
            />
          </View>

          <View style={style.item_container}>
            <TouchableOpacity style={style.touchable_container}>
              <View style={style.item}>
                <Text style={style.item_text}>Knife</Text>

                <Text style={style.small_text}>10x</Text>
              </View>
            </TouchableOpacity>

            <View style={{ height: 5 }} />

            <TouchableOpacity style={style.touchable_container}>
              <View style={style.item}>
                <Text style={style.item_text}>Measuring cups</Text>

                <Text style={style.small_text}>1x</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={style.title_container}>
            <FontAwesome5
              name="book"
              style={[COMMON_STYLES.COMMON_ICON_STYLES, { fontSize: 24 }]}
            />

            <Text style={style.title}>Steps(1)</Text>

            <FontAwesome5
              name="plus"
              style={COMMON_STYLES.COMMON_ICON_STYLES}
            />
          </View>

          <View style={style.item_container}>
            <TouchableOpacity style={style.touchable_container}>
              <View
                style={[
                  style.item,
                  { paddingLeft: 20, justifyContent: "flex-start" },
                ]}>
                <FontAwesome5
                  name="grip-vertical"
                  style={COMMON_STYLES.COMMON_ICON_STYLES}
                />
                <Text
                  style={[
                    style.item_text,
                    { marginLeft: 10, marginRight: 10, flexGrow: 1 },
                  ]}>
                  Cut the Yellow Peppers into thin slices
                </Text>
                <FontAwesome5
                  name="pen"
                  style={COMMON_STYLES.COMMON_ICON_STYLES}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ flexGrow: 1 }} />

          <View style={[style.item_container, { flexDirection: "row" }]}>

            <View style={{ flex: 1, paddingHorizontal: 5 }}>
              <TouchableOpacity
                style={style.touchable_container_blue}
                disabled={true}>
                <View style={style.item_center}>
                  <Text style={style.item_text_white}>
                    Save
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 5 }}>
              <TouchableOpacity
                style={[
                  style.touchable_container_blue,
                  { backgroundColor: "#fb6a68" },
                ]}>
                <View style={style.item_center}>
                  <Text style={style.item_text_white}>
                    Delete
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    padding: 10,
    backgroundColor: "white",
  },
  title_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    width: "100%",
    paddingRight: 30,
    paddingLeft: 10,
    backgroundColor: "white",
  },
  item_container: {
    width: "100%",
    marginTop: 10,
    padding: 10,
  },
  button_container: {
    width: "100%",
    marginTop: 10,
    padding: 10,
    flexDirection: "row",
  },
  title: {
    fontSize: 24,
    color: "#2f394a",
    textAlign: "left",
    fontWeight: "bold",
    marginTop: 10,
    paddingLeft: 10,
    flexGrow: 1,
  },
  item_text: {
    marginLeft: 20,
    fontSize: 15,
    fontWeight: "bold",
    color: "#79808c",
  },
  small_text: {
    marginLeft: 20,
    fontSize: 13,
    fontWeight: "bold",
    color: "#79808c",
  },
  item_text_white: {
    marginLeft: 20,
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  sub_item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  touchable_container: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 20,
    paddingRight: 20,
    width: "100%",
    marginVertical: 5,
    shadowColor: "#2f394a",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 7,
  },
  touchable_container_blue: {
    backgroundColor: "#2e9dfb",
    color: "white",
    borderRadius: 200,
    paddingVertical: 20,
    paddingRight: 20,
    width: "100%",
    marginVertical: 0,
    shadowColor: "#2f394a",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 7,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  item_center: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  disable_text: {
    color: "#ded5d6",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default ItemsScreen;
