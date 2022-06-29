import React from 'react';
import { StyleSheet, Text, Image, View, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './src/assets/foto.jpg';
import Card from './src/assets/components/Card';

const App = () => {

  function handleRedeSocial (rede_social){

    switch(rede_social){

      case 'linkedin':
        Alert.alert('https://www.linkedin.com/in/juliocmacedo/')
        break
        case 'github':
        Alert.alert('https://github.com/MacedoJulio')
        break
        case 'instagram':
        Alert.alert('https://www.instagram.com/_juliomaceedo/')
        break

    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Júlio César Macedo</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile </Text>
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

    <Card titulo="Formação Acadêmica :">
      <Text>FAETEC - Montagem e Manutenção</Text>
      <Text>Estácio de Sá - Sistemas de Informação</Text>
    </Card>
    <Card titulo="Cursos :">
      <Text>React Native </Text>
      <Text>Java</Text>
      <Text>HTML5 e CSS3</Text>
      <Text>Banco de Dados e SQL</Text>
      <Text>GIT e GITHub</Text>
       </Card>
    
    
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
}

})

export default App;