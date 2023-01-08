import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { COMMON_STYLES } from "~theme/common-styles";

function FavoriteScreen() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Meal Name</Text>

      <View style={style.title_container}>
        <Text style={style.title}>Appetizer</Text>

        <FontAwesome5
            name="plus"
            style={COMMON_STYLES.COMMON_ICON_STYLES}
        />
      </View>


      <View style={style.item_container}>
        <TouchableOpacity style={style.touchable_container}>
          <View style={style.item}>
            <Text style={style.item_text}>Teriyaki Pineapple Meatballs</Text>
            <FontAwesome5
              name="pen"
              style={COMMON_STYLES.COMMON_ICON_STYLES}
            />
          </View>
        </TouchableOpacity>

        <View style={{ height: 5 }} />

        <TouchableOpacity style={style.touchable_container}>
          <View style={style.item}>
            <Text style={style.item_text}>Fruit Charcuterie Board</Text>
            <FontAwesome5
                name="pen"
                style={COMMON_STYLES.COMMON_ICON_STYLES}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={style.title_container}>
        <Text style={style.title}>Entree</Text>

        <FontAwesome5
            name="plus"
            style={COMMON_STYLES.COMMON_ICON_STYLES}
        />
      </View>


      <View style={style.item_container}>
        <TouchableOpacity style={style.touchable_container}>
          <View style={style.item}>
            <Text style={style.item_text}>Chorizo & mozzarella gnocchi bake</Text>
            <FontAwesome5
                name="pen"
                style={COMMON_STYLES.COMMON_ICON_STYLES}
            />
          </View>
        </TouchableOpacity>
      </View>



      <View style={style.title_container}>
        <Text style={style.title}>Dessert</Text>

        <FontAwesome5
            name="plus"
            style={COMMON_STYLES.COMMON_ICON_STYLES}
        />
      </View>
    </View>
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
    backgroundColor: "white",
  },
  item_container: {
    width: "100%",
    marginTop: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    color: "#2f394a",
    textAlign: "left",
    fontWeight: "bold",
    marginTop: 10,
    paddingLeft: 10
  },
  item_text: {
    marginLeft: 20,
    fontSize: 15,
    fontWeight: "bold",
    color: "#555d6b",
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
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default FavoriteScreen;
