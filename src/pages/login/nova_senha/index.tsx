import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { style } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import { themas } from "../../../global/themes";

export default function Login() {
  return (
    <SafeAreaView style={style.screen}>
      <View style={style.container}>
        <View style={style.boxTop}>
          <Image source={Logo} style={style.logo} resizeMode="contain" />
        </View>

        <View style={style.boxMid}>
          <Text style={style.titleInput}>Digite a nova senha</Text>
          <View
            style={[
              style.boxInput,
              { flexDirection: "row", alignItems: "center" },
            ]}
          >
            <TextInput
              placeholder="123456"
              placeholderTextColor="#9ca3af"
              style={[style.input, { flex: 1 }]}
              secureTextEntry
            />
            <MaterialIcons name="lock" size={20} color={themas.colors.black} />
          </View>

          <Text>Digite novamente</Text>
          <View
            style={[
              style.boxInput,
              { flexDirection: "row", alignItems: "center" },
            ]}
          >
            <TextInput
              placeholder="123456"
              placeholderTextColor="#9ca3af"
              style={[style.input, { flex: 1 }]}
              secureTextEntry
            />
            <MaterialIcons name="lock" size={20} color={themas.colors.black} />
          </View>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <TouchableOpacity activeOpacity={0.6} style={style.button}>
              <Text style={style.textButton}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
