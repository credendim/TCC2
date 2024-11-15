import { ScrollView, Image, StyleSheet, Platform, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Appearance } from 'react-native';

export default function HomeScreen() {  
  return (
    <View style={styles.body}>
      <View style={styles.headerStyle}>
        <Image source={require('@/assets/images/senai.png')} style={styles.headerImage}  resizeMode="contain"></Image>
      </View>
      <View style={styles.perfilInformation}>
        <View style={styles.cardPhoto}></View>
        <View style={styles.containerInformation}>
          <Text style={styles.cardTittle2}>NOME SOBRENOME</Text>
          <Text style={styles.cardTittle3}>Curso - Senai</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.botao}>
        <Text style={styles.botaoText}>Minhas Informações</Text>
      </View>
      <View style={styles.botao}>
        <Text style={styles.botaoText}>Documentos</Text>
      </View>
      <View style={styles.botao}>
        <Text style={styles.botaoText}>Faltas</Text>
      </View>
      <View style={styles.botao2}>
        <Text style={styles.botaoText2}>Precia de alguma ajuda?</Text>
      </View>
    </View>
  );    
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  headerImage: {
    left: -75,
    height: 50,
    width: '100%',
    top: 40,
    position: 'absolute',
  },
  headerStyle: {
    position: 'static',
    top: 0,
    marginBottom: 20,
    height: 100,
    backgroundColor: '#ED1F24',
  },
  perfilInformation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    marginLeft: 30,
  },
  cardPhoto: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
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
  cardTittle3: {
    fontWeight: '300',
  },
  containerInformation: {
    gap: 5,
  },
  line: {
    backgroundColor: '#F20F0F',
    width: '85%',
    marginTop: 15,
    height: 2,
    alignSelf: 'center',
  },
  botao: {
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: '#EF7B7B',
    width: 280,
    height: 45,
    justifyContent: 'center',
    marginTop: 15,
  }, 
  botaoText: {
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center',
  },
  botao2: {
    alignSelf: 'center',
    borderRadius: 15,
    borderWidth: 1, 
    borderColor: 'red',
    backgroundColor: 'white',
    width: 180,
    height: 45,
    justifyContent: 'center',
    marginTop: 15,
  }, 
  botaoText2: {
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'center',
  },
});
