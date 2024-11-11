import { ScrollView, Image, StyleSheet, Platform, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';  // Importar Link


import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Appearance } from 'react-native';

export default function HomeScreen() {  
  return (
    <View style={styles.body}>
      <View style={styles.headerStyle}>
        <Image source={require('@/assets/images/senai.png')} style={styles.headerImage}></Image>
      </View>
      <View style={styles.notificationAlert}></View>
      <View style={styles.buttonContainer}>
        <Link href="/notificacoes" style={styles.buttonparts}>
          <View style={styles.buttonparts}>
            <View style={styles.button}>
                {/* Usando Link */}
                <Ionicons name="notifications-outline" size={40} color="grey" />
            </View>
            <Text>
                Notificações
            </Text>
          </View>
        </Link>
        <Link href="/informacoes" style={styles.buttonparts}>
          <View style={styles.buttonparts}>
            <View style={styles.button}>
              <MaterialIcons name="error-outline" size={40} color="grey" />
            </View>
            <Text>
                Informações
            </Text>
          </View>
        </Link>
        <Link href="/notificacoes" style={styles.buttonparts}>
          <View style={styles.buttonparts}>
            <View style={styles.button}>
              <AntDesign name="shoppingcart" size={40} color="grey" />
            </View>
            <Text>
                AAPM
            </Text>
          </View>
        </Link>
        <Link href="/notificacoes" style={styles.buttonparts}>
          <View style={styles.buttonparts}>
            <View style={styles.button}>
              <AntDesign name="calendar" size={40} color="grey" />
            </View>
            <Text>
                Cronograma
            </Text>
          </View>
        </Link>
      </View>
    
      <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.containerline}>
        <View style={styles.line}></View>
        <Text style={styles.linetext}>
          Notificações Recentes
        </Text>
      </View>
      <View style={styles.balloon}>
          <View style={styles.balloonTitle}>
            <Text style={styles.balloonTitle}>
              Agosto 16, 2024
            </Text>
          </View>
          <View style={styles.balloonContent}>
              <View style={styles.balloonContenttext}>
                <Text style={styles.balloonContenttext}>
                  FIESP, SENAI-SP e Sebrae-SP lançam Jornada de Descarbonização para a indústria paulista
                </Text>
                <Text style={styles.seemore}>
                  Saiba mais
                </Text>
              </View>
              <View style={styles.balloonContentimage}>
                <Image source={require('@/assets/images/jornada.png')}></Image>
              </View>
          </View>
      </View>
      <View style={styles.bodyTitle}>
        <MaterialCommunityIcons name="pencil-outline" size={24} color="#ED1F24" />
        <Text style={styles.bodyTitleText}>
          Tarefas/notas
        </Text>
      </View>
      <ScrollView horizontal={true} style={styles.tarefaScroll} showsHorizontalScrollIndicator={false}>
        <View style={styles.tarefasBalloon}>
          <View style={styles.tarefasBalloonTitle}>
            <Text style={styles.tarefasBalloonTitleText}>
              PAULO CESAR DE CAMAR...
            </Text>
          </View>
          <View style={styles.tarefasBalloonContent}>
            <Text>
              Postar certificado emitido pela plataforma Cod3r sobre React Native.
            </Text>
            <Text>
              Hoje, 15:28
            </Text>
          </View>
        </View>
        <View style={styles.tarefasBalloon}>
          <View style={styles.tarefasBalloonTitle}>
            <Text style={styles.tarefasBalloonTitleText}>
              PAULO CESAR DE CAMAR...
            </Text>
          </View>
          <View style={styles.tarefasBalloonContent}>
            <Text>
              Postar certificado emitido pela plataforma Cod3r sobre React Native.
            </Text>
            <Text>
              Hoje, 15:28
            </Text>
          </View>
        </View>
        <View style={styles.tarefasBalloon}>
          <View style={styles.tarefasBalloonTitle}>
            <Text style={styles.tarefasBalloonTitleText}>
              PAULO CESAR DE CAMAR...
            </Text>
          </View>
          <View style={styles.tarefasBalloonContent}>
            <Text>
              Postar certificado emitido pela plataforma Cod3r sobre React Native.
            </Text>
            <Text>
              Hoje, 15:28
            </Text>
          </View>
        </View>
        <View style={styles.tarefasBalloon}>
          <View style={styles.tarefasBalloonTitle}>
            <Text style={styles.tarefasBalloonTitleText}>
              PAULO CESAR DE CAMAR...
            </Text>
          </View>
          <View style={styles.tarefasBalloonContent}>
            <Text>
              Postar certificado emitido pela plataforma Cod3r sobre React Native.
            </Text>
            <Text>
              Hoje, 15:28
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.containerline}>
        <View style={styles.line}></View>
        <Text style={styles.linetext}>
          Informações Recentes
        </Text>
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
      <View style={styles.sendFormBallon}>
          <View style={styles.SendFormTitle}>
            <Text style={styles.balloonTitle}>
              Liberação
            </Text>
          </View>
          <View style={styles.balloonContent}>
              <View style={styles.balloonContenttext2}>
                <Text style={styles.balloonContenttext3}>
                  Precisa Sair mais cedo?
                </Text>
                <Text style={styles.sendForm}>
                  Enviar Formulário
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
  ScrollView: {
    marginTop: -5,
    // marginBottom: 40,
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
    marginBottom: 70,
    alignItems: 'center',
    height: '25%',
    backgroundColor: '#ED1F24',
  },
  notificationAlert: {
    width: 20,
    height: 20,
    backgroundColor: '#EF7B7B',
    position: 'absolute',
    top: 135,
    left: 10,
    zIndex: 10,
    borderRadius: 100,
    // display: 'none',
  },  
  buttonContainer: {
    width: '100%',
    top: 140,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  buttonparts: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stepContainer: {
    borderRadius: 100,
  },
  textContainer: {
    backgroundColor: '#ED1F24',
  },
  titleContainer: {
    backgroundColor: '#ED1F24',
  },
  containerline: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
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
  seemore: {
    color: '#EF7B7B',
    textDecorationLine: 'underline',
  },
  balloonContentimage: {

  },
  bodyTitle: {
    // height: 30,
    marginLeft: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 15,
  },
  bodyTitleText: {
    fontSize: 20,
    fontWeight: '600',
  },
  tarefaScroll: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    height: 170,
  },
  tarefasBalloon: {
    width: 150,
    height: 120,
    marginLeft: 15,
  },
  tarefasBalloonTitle: {
    height: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    display: 'flex',
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 5,
  },
  tarefasBalloonTitleText: {
    fontSize: 13,
  } , 
  tarefasBalloonContent: {
    height: '100%',
    padding: 5,
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'space-around',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 3,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  balloonContenttext2: {
    width: '100%',
  },
  contentTittle: {
    color: '#F20F0F',
  },
  sendFormBallon: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 5,
    marginLeft: 90,
    marginRight: 95,
    marginBottom: 55,
    marginTop: 15,
  },
  SendFormTitle: {
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
  balloonContenttext3: {
    textAlign: 'center',
    fontWeight: '900',
  },
  sendForm: {
    textAlign: 'center',
    color: '#EF7B7B',
    textDecorationLine: 'underline',
  },
});
