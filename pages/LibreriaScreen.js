import * as React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView, TouchableHighlight, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';
import PropTypes from 'prop-types';

const post = 'http://protocolos.revistacontactord.com/api/show';
const image_base_url = 'http://protocolos.revistacontactord.com/storage/';

export default class LibreriaScreen extends React.Component {

 

 




   static navigationOptions = {
       //header: null,
       title: 'Libreria',
       headerStyle: {
         backgroundColor: '#76bc21', // Aqui pondremos el color del fondo
         boxShadow: '0'
        
       },
       headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center'
    },
   };






//{this.props.navigation.state.params.item.titulo}

  render() {

   //const { params } = this.props.navigation.state;

    return (
         <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
               <View style={styles.contenedor_general}>


                  <Text style={styles.texto_division}>GUIAS Y PROTOCOLOS ALMACENADOS</Text>

                   <View style={styles.contenedor_opcion}>
                      <View style={styles.cont_info}>
                        <View style={styles.icono_opcion}><Image style={styles.icono} source={require('../assets/icons/medicine.png') } /></View>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('data')}>
                           <View style={styles.text_opcion} >
                               <Text>ESTO ES UNA PRUEBA DE PROTOCOLO PARA VER SI TODO ESTA BIEN</Text>
                           </View>
                        </TouchableHighlight>
                      </View>

                       <View style={styles.status_option}>
                         <Text>Update: 20-19-2019</Text>
                         <View style={styles.descargas_conte}>
                            <Text>Descargas:</Text>
                            <Image style={[styles.status_icon]} source={require('../assets/icons/inbox.png') } />
                            <Image style={[styles.status_icon, styles.status_icon_active]} source={require('../assets/icons/file.png') } />
                         </View>
                      </View>
                   </View>


                   <View style={styles.contenedor_opcion}>
                      <View style={styles.cont_info}>
                        <View style={styles.icono_opcion}><Image style={styles.icono} source={require('../assets/icons/medicine.png') } /></View>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('data')}>
                           <View style={styles.text_opcion} >
                               <Text>ESTO ES UNA PRUEBA DE PROTOCOLO PARA VER SI TODO ESTA BIEN</Text>
                           </View>
                        </TouchableHighlight>
                      </View>

                       <View style={styles.status_option}>
                         <Text>Update: 20-19-2019</Text>
                         <View style={styles.descargas_conte}>
                            <Text>Descargas:</Text>
                            <Image style={[styles.status_icon]} source={require('../assets/icons/inbox.png') } />
                            <Image style={[styles.status_icon, styles.status_icon_active]} source={require('../assets/icons/file.png') } />
                         </View>
                      </View>
                   </View>



                   <View style={styles.contenedor_opcion}>
                      <View style={styles.cont_info}>
                        <View style={styles.icono_opcion}><Image style={styles.icono} source={require('../assets/icons/medicine.png') } /></View>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('data')}>
                           <View style={styles.text_opcion} >
                               <Text>ESTO ES UNA PRUEBA DE PROTOCOLO PARA VER SI TODO ESTA BIEN</Text>
                           </View>
                        </TouchableHighlight>
                      </View>

                       <View style={styles.status_option}>
                         <Text>Update: 20-19-2019</Text>
                         <View style={styles.descargas_conte}>
                            <Text>Descargas:</Text>
                            <Image style={[styles.status_icon]} source={require('../assets/icons/inbox.png') } />
                            <Image style={[styles.status_icon, styles.status_icon_active]} source={require('../assets/icons/file.png') } />
                         </View>
                      </View>
                   </View>



                   <View style={styles.contenedor_opcion}>
                      <View style={styles.cont_info}>
                        <View style={styles.icono_opcion}><Image style={styles.icono} source={require('../assets/icons/medicine.png') } /></View>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('data')}>
                           <View style={styles.text_opcion} >
                               <Text>ESTO ES UNA PRUEBA DE PROTOCOLO PARA VER SI TODO ESTA BIEN</Text>
                           </View>
                        </TouchableHighlight>
                      </View>

                       <View style={styles.status_option}>
                         <Text>Update: 20-19-2019</Text>
                         <View style={styles.descargas_conte}>
                            <Text>Descargas:</Text>
                            <Image style={[styles.status_icon]} source={require('../assets/icons/inbox.png') } />
                            <Image style={[styles.status_icon, styles.status_icon_active]} source={require('../assets/icons/file.png') } />
                         </View>
                      </View>
                   </View>


                   <View style={styles.contenedor_opcion}>
                      <View style={styles.cont_info}>
                        <View style={styles.icono_opcion}><Image style={styles.icono} source={require('../assets/icons/medicine.png') } /></View>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('data')}>
                           <View style={styles.text_opcion} >
                               <Text>ESTO ES UNA PRUEBA DE PROTOCOLO PARA VER SI TODO ESTA BIEN</Text>
                           </View>
                        </TouchableHighlight>
                      </View>

                       <View style={styles.status_option}>
                         <Text>Update: 20-19-2019</Text>
                         <View style={styles.descargas_conte}>
                            <Text>Descargas:</Text>
                            <Image style={[styles.status_icon]} source={require('../assets/icons/inbox.png') } />
                            <Image style={[styles.status_icon, styles.status_icon_active]} source={require('../assets/icons/file.png') } />
                         </View>
                      </View>
                   </View>



                </View>
            </ScrollView>
         </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({

  container:{
      width: '100%',
      flex: 1,
      backgroundColor: '#F4F4F4',
      paddingBottom: 20,
      justifyContent: 'center',
  },

  contenedor_general: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    paddingTop: 30,
    
  },


  texto_division: {
    width: '90%',
    margin: 'auto',
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'grey',
  },

  buttonStyle: {
    width: '100%',
    margin: 'auto',
    color: 'white',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#000F9F'
  },






  contenedor_opcion: {
   width: '90%',
   margin: 'auto',
   marginBottom: 10,
   marginTop: 10,
   flex: 1,
   backgroundColor: 'white',
   padding: 5,
   borderRadius: 10,
   paddingBottom: 10,
   paddingTop: 10,

  },


  imagen_contenedor:{
      width: '100%',
      height: 150,
      paddingBottom: 5,
  },

  imagen: {
      width: '100%',
      height: 150
  },



  cont_info:{
    flexDirection: 'row',
    width: '100%',
  },


  icono_opcion: {
   width: 40,
   paddingLeft: 20,
   paddingTop: 10,
   flex: 1,

  },


  icono: {
   width: 40,
   height: 40
  },



  text_opcion:{
   flex: 4,
   width: '80%',
   height: '100%',
   padding: 10
  },


  status_option:{
   flex: 3,
   width: '100%',
   paddingLeft: 20,
   paddingRight: 20,
   flexDirection: 'row',
   alignItems: 'center'
  },


  texto_option: {
   padding: 5,
  },

  descargas_conte:{
   flexDirection: 'row',
   paddingLeft: 10,
  },

  status_icon: {
   width:  20,
   height: 20,
   marginLeft: 7,
   opacity: 0.2,
  },


  status_icon_active: {
   opacity: 1,
  },

 



});




