import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 30,
  },
  boxTop: {
    height: Dimensions.get("window").height / 4,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  boxMid: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    paddingBottom: 70,
    borderWidth: 1,
    borderColor: "#e5e7eb", // cinza bem claro
    marginTop: 50,
  },
  logo: {
    width: 310,
    height: 400,
    marginTop: 10,
  },
  titleInput: {
    marginLeft: 5,
    marginTop: 20,
    fontSize: 14,
    color: "#111827",
  },
  boxInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: "100%",
    width: "100%",
    color: "#111827",
    paddingLeft: 5,
  },
  button: {
    width: 300,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#f59e0b",
    marginTop: 5,
  },
  textButton: {
    fontSize: 16,
    color: "#FFFF",
    fontWeight: "bold",
  },
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
