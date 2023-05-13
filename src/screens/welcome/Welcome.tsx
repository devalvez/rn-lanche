import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'

import styles from './styles';
import logo from '../../assets/logo.png';

const Welcome = () => {
  return (
    <ImageBackground source={{uri: 'https://wallpaper.dog/large/20491944.jpg'}} style={styles.container}>

      <View style={styles.brandContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text style={styles.title}>Your best gourmet experience</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('Welcome text')}>
        <Text style={styles.label}>Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default Welcome;