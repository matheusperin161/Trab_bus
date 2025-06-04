import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ImageBackground
} from 'react-native';

import { style } from './styles';

import ImagemLogin from '../../assets/imagemlogin.png';
import Logo from '../../assets/logo.png';
import LogoSenha from '../../assets/logosenha.png';
import LogoEmail from '../../assets/logo email.png';
import OlhoC from '../../assets/olhoc.png';

export default function Login() {
  return (
    <ImageBackground
      source={ImagemLogin}
      style={style.container}
      resizeMode="cover"
    >
      <View style={style.boxTop}>
        <Image source={Logo} />
      </View>

        <View style={style.boxTop2}>
        

      </View>

      <View style={style.boxMid}>
        <Text style={style.boxMidText}>    Entre ou {'\n'} cadastre-se</Text>
      </View>
      <View style={style.boxBottom}>
        <TextInput placeholder="Endereço de email" />
        
        <TextInput placeholder="Senha" secureTextEntry />
      </View>
      
    </ImageBackground>
  );
}
