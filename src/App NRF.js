import React from 'react';
import { StyleSheet, Text, Image, View, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './assets/foto.jpg';


const App = () => {

  function handleRedeSocial (rede_social){

    switch(rede_social){

      case 'linkedin':
        Alert.alert('https://linkedin.com/in/juliocmacedo')
        break
        case 'github':
        Alert.alert('https://github.com/in/juliocmacedo')
        break
        case 'instagram':
        Alert.alert('https://instagram.com/in/juliocmacedo')
        break

    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Júlio César Macedo</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial ('github')}>
            <Icon name='github' size={30} color= 'blue'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial ('linkedin')}>
            <Icon name='linkedin'size={30} color= '#0099FF'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial ('instagram')}>
            <Icon name='instagram'size={30} color= 'red'/>
            </TouchableOpacity> 
          </View>
        </View>

      <View style={style.card_container}>
        <View style={style.card}>
          <View style={style.card_header}>
            <Text style={style.card_content_text}>Formação Acadêmica</Text>
        </View>
        <View style={style.card_content}>
          <Text>FAETEC - Montagem e Manutenção</Text>
          <Text>UNESA - Sistemas de Informação</Text>
          </View>
        </View>
      </View>

      <View style={style.card_container}>
        <View style={style.card}>
          <View style={style.card_header}>
            <Text style={style.card_content_text}>Cursos</Text>
        </View>
        <View style={style.card_content}>
          <Text>HTML5 e CSS3</Text>
          <Text>React Native</Text>
          <Text>Java</Text>
          <Text>JavaScript</Text>
          </View>
        </View>
      </View>

      </View>
      </>
  );
};

const style = StyleSheet.create({

  page: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E7E7E7'

  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
foto: {
  width: 200,
  height: 200,
  borderRadius: 125
},
nome: {
  fontSize: 26,
  fontWeight: 'bold',
  marginTop: 10
},
funcao: {
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 10
},
redes_sociais: {
  flexDirection: 'row',
  justifyContent:  'space-evenly',
  width: '50%',
  marginTop: 20
},
card_container: {
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20
},
card: {
  width: '60%',
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#939393',
  padding: 5
},
card_content: {
  marginTop: 5,
  marginBottom: 5
},
card_content_text: {
  fontWeight: 'bold',
  fontSize: 16,
}

})

export default App;