
import { ScrollView, Image, StyleSheet, Platform, Text, View, Pressable } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
  useDerivedValue,
} from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import React, {useState} from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Appearance } from 'react-native';

export default function Carteirinha() {  
  const rotate = useSharedValue(0);
  const frontAnimatedStyle = useAnimatedStyle(() =>{
    const rotateValue = interpolate(rotate.value, [0,1],[0, -180])
    return {
      transform: [
        {
          rotateY : withTiming(`${rotateValue}deg` ,{duration:750})
        }
      ]
    }
  })
  const backAnimatedStyle = useAnimatedStyle(() =>{
    const rotateValue = interpolate(rotate.value, [0,1],[-180, -360])
    return {
      transform: [
        {
          rotateY : withTiming(`${rotateValue}deg` ,{duration:750})
        }
      ]
    }
  })
  return (
    <View style={styles.body}>
      <View style={styles.headerStyle}>
        <Image source={require('@/assets/images/senai.png')} style={styles.headerImage}></Image>
      </View>
      <Pressable style={styles.contentBody} onPress={() =>{
        rotate.value = rotate.value ? 0 :1;
      }}>
        <Text style={styles.titleText}>
          Carteirinha do estudante
        </Text>
        <Animated.View style={[styles.cardfront, frontAnimatedStyle]}>
          <Image source={require('@/assets/images/3.png')} style={styles.cardImage} resizeMode="stretch"></Image>
          {/* <Image source={require('@/assets/images/3.png')} style={styles.cardImage} resizeMode="stretch"></Image> */}
          <View style={styles.cardPhoto}></View>
          <View style={styles.cardInformations}>
            <Text style={styles.cardTittle}>NOME DO ALUNO</Text>
            <View>
              <Text style={styles.cardtittle3}>Unidade</Text>
              <Text style={styles.cardTittle2}>118 - A. Jacob LAFER</Text>
            </View>
            <View>
              <Text style={styles.cardtittle3}>Nascimento</Text>
              <Text style={styles.cardTittle2}>xx/xx/xxxx</Text>
            </View>
          </View>
        </Animated.View>
        <Animated.View style={[styles.cardBack, backAnimatedStyle]}>
          <Image source={require('@/assets/images/4.png')} style={styles.cardImage} resizeMode="stretch"></Image>
          <View style={styles.backCardPhoto}></View>
          <View style={styles.cardInformations2}>
            <View>
              <Text style={styles.cardtittle3}>Unidade</Text>
              <Text style={styles.cardTittle2}>118 - A. Jacob LAFER</Text>
            </View>
              <Text style={styles.cardtittle3}>Controle do acesso SENAI-SP</Text>
          </View>
        </Animated.View>
        <Text>
          Toque para girar
        </Text>
      </Pressable>
    </View>
  );    
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  headerImage: {
    height: 90,
    width: '80%',
    top: 40,
    position: 'absolute',
  },
  headerStyle: {
    position: 'static',
    top: 0,
    marginBottom: 10,
    alignItems: 'center',
    height: '25%',
    backgroundColor: '#ED1F24',
  },
  contentBody: {
    alignItems: 'center',
  },
  titleText: {
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 15,
  },
  cardfront: {
    display: 'flex',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },
  cardImage: {
    width: 270,
    height: 400,
    marginBottom: 10,
  },
  cardPhoto: {
    top: 25,
    backgroundColor: 'green',
    width: 100,
    height: 100,
    position: 'absolute',
    borderRadius: 100,
  },
  cardInformations: {
    top: 140,
    position: 'absolute',
    alignItems: 'center',
    gap: 30,
  },
  cardBack: {
    top: 37,
    position: 'absolute',
    backfaceVisibility: 'hidden',
    
  },
  cardInformations2: {
    top: 250,
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    gap: 30,
  },
  backCardPhoto: {
    alignSelf: 'center',
    top: 70,
    backgroundColor: 'green',
    width: 150,
    height: 150,
    position: 'absolute',
    borderRadius: 100,
  },
  cardTittle: {
    fontWeight: '600',
    fontSize: 20,
  },
  cardTittle2: {
    fontWeight: '600',
    fontSize: 15,
  },
  cardtittle3: {
    fontWeight: '300',
    textAlign: 'center',
  },
});
