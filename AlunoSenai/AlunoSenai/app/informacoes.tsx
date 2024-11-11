import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, Image, StyleSheet, Platform, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';


import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Appearance } from 'react-native';

export default function NotificacoesScreen() {
  const navigation = useNavigation();
  const [isSpecial, setIsSpecial] = useState(false);

  useEffect(() => {
    // Condicionalmente alterando o título
    navigation.setOptions({
      title: isSpecial ? 'Informações Especiais' : 'Minhas Informações',
    });
  }, [isSpecial, navigation]);

  return (
    <View style={styles.body}>
      <StatusBar style="light" backgroundColor="red" />
      <View style={styles.containerline}>
        <View style={styles.line}></View>
        <Text style={styles.linetext}>
          Informações Recentes
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.balloon}>
          <View style={styles.balloonTitle}>
            <Text style={styles.balloonTitle}>
              Agosto 16, 2024
            </Text>
          </View>
          <View style={styles.balloonContent}>
              <View style={styles.balloonContenttext2}>
              <Text style={styles.contentTittle}>
                  Atenção!
                </Text>
                <Text style={styles.balloonContenttext2}>
                  As notas que constam aqui no  APP correspondem a seus resultados parciais. Os resultados finais serão disponibilizados em seu boletim e no histórico escolar, quando for o caso. Consulte a secretaria da Escola caso tenha alguma dúvida sobre suas notas. Att. SENAI.
                </Text>
              </View>
          </View>
      </View>
      <View style={styles.balloon}>
          <View style={styles.balloonTitle}>
            <Text style={styles.balloonTitle}>
              Agosto 16, 2024
            </Text>
          </View>
          <View style={styles.balloonContent}>
              <View style={styles.balloonContenttext2}>
              <Text style={styles.contentTittle}>
                  Atenção!
                </Text>
                <Text style={styles.balloonContenttext2}>
                  As notas que constam aqui no  APP correspondem a seus resultados parciais. Os resultados finais serão disponibilizados em seu boletim e no histórico escolar, quando for o caso. Consulte a secretaria da Escola caso tenha alguma dúvida sobre suas notas. Att. SENAI.
                </Text>
              </View>
          </View>
      </View>
      <View style={styles.balloon}>
          <View style={styles.balloonTitle}>
            <Text style={styles.balloonTitle}>
              Agosto 16, 2024
            </Text>
          </View>
          <View style={styles.balloonContent}>
              <View style={styles.balloonContenttext2}>
              <Text style={styles.contentTittle}>
                  Atenção!
                </Text>
                <Text style={styles.balloonContenttext2}>
                  As notas que constam aqui no  APP correspondem a seus resultados parciais. Os resultados finais serão disponibilizados em seu boletim e no histórico escolar, quando for o caso. Consulte a secretaria da Escola caso tenha alguma dúvida sobre suas notas. Att. SENAI.
                </Text>
              </View>
          </View>
      </View>
      <View style={styles.balloon}>
          <View style={styles.balloonTitle}>
            <Text style={styles.balloonTitle}>
              Agosto 16, 2024
            </Text>
          </View>
          <View style={styles.balloonContent}>
              <View style={styles.balloonContenttext2}>
              <Text style={styles.contentTittle}>
                  Atenção!
                </Text>
                <Text style={styles.balloonContenttext2}>
                  As notas que constam aqui no  APP correspondem a seus resultados parciais. Os resultados finais serão disponibilizados em seu boletim e no histórico escolar, quando for o caso. Consulte a secretaria da Escola caso tenha alguma dúvida sobre suas notas. Att. SENAI.
                </Text>
              </View>
          </View>
      </View>
      <View style={styles.balloon}>
          <View style={styles.balloonTitle}>
            <Text style={styles.balloonTitle}>
              Agosto 16, 2024
            </Text>
          </View>
          <View style={styles.balloonContent}>
              <View style={styles.balloonContenttext2}>
              <Text style={styles.contentTittle}>
                  Atenção!
                </Text>
                <Text style={styles.balloonContenttext2}>
                  As notas que constam aqui no  APP correspondem a seus resultados parciais. Os resultados finais serão disponibilizados em seu boletim e no histórico escolar, quando for o caso. Consulte a secretaria da Escola caso tenha alguma dúvida sobre suas notas. Att. SENAI.
                </Text>
              </View>
          </View>
      </View>
      <View style={styles.balloon}>
          <View style={styles.balloonTitle}>
            <Text style={styles.balloonTitle}>
              Agosto 16, 2024
            </Text>
          </View>
          <View style={styles.balloonContent}>
              <View style={styles.balloonContenttext2}>
              <Text style={styles.contentTittle}>
                  Atenção!
                </Text>
                <Text style={styles.balloonContenttext2}>
                  As notas que constam aqui no  APP correspondem a seus resultados parciais. Os resultados finais serão disponibilizados em seu boletim e no histórico escolar, quando for o caso. Consulte a secretaria da Escola caso tenha alguma dúvida sobre suas notas. Att. SENAI.
                </Text>
              </View>
          </View>
      </View>
      <View style={styles.balloon}>
          <View style={styles.balloonTitle}>
            <Text style={styles.balloonTitle}>
              Agosto 16, 2024
            </Text>
          </View>
          <View style={styles.balloonContent}>
              <View style={styles.balloonContenttext2}>
              <Text style={styles.contentTittle}>
                  Atenção!
                </Text>
                <Text style={styles.balloonContenttext2}>
                  As notas que constam aqui no  APP correspondem a seus resultados parciais. Os resultados finais serão disponibilizados em seu boletim e no histórico escolar, quando for o caso. Consulte a secretaria da Escola caso tenha alguma dúvida sobre suas notas. Att. SENAI.
                </Text>
              </View>
          </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  containerline: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  line: {
    backgroundColor: '#F20F0F',
    width: '100%',
    marginTop: 6,
    height: 2,
  },
  linetext: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff',
    position: 'relative',
    top: -12,
    fontSize: 20,
    fontWeight: '600',
  },
  balloon: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 5,
    marginLeft: 30,
    marginRight: 35,
    marginBottom: 15,
  },
  balloonTitle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingLeft: 5,
    textAlignVertical: 'center',
    color: 'white',
    height: 25,
    fontSize: 15,
    fontWeight: '600',
    backgroundColor: '#EF7B7B',
  },
  balloonContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10, 
  },
  balloonContenttext: {
    width: 150,
    gap: 10,
    fontWeight: '500',
  },
  balloonContenttext2: {
    width: '100%',
  },
  contentTittle: {
    color: '#F20F0F',
  },
})
