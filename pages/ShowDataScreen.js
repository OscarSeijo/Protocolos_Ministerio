import * as React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView, TouchableHighlight, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';
//import * as FileSystem from 'expo-file-system';

import RNFetchBlob from 'rn-fetch-blob';

const post = 'http://protocolos.revistacontactord.com/api/show';
const download_link = 'http://protocolos.revistacontactord.com/api/download/pdf/';
const image_base_url = 'http://protocolos.revistacontactord.com/storage/';




export default class ShowData extends React.Component {


   state = {
      post: []
   }




   static navigationOptions = {
      // header: null,
       title: '',
       headerStyle: {
         backgroundColor: 'transparent', // Aqui pondremos el color del fondo
         boxShadow: '0'
        
       },
       headerTintColor: 'green',
       headerTitleStyle: {
         fontWeight: 'bold',
       },
   };




//{this.props.navigation.state.params.item.titulo}

  render() {

   //const { params } = this.props.navigation.state;

    return (
         <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>


               <View key={item.id}  style={styles.contenedor_general}>
                    <View style={styles.contenedor_imagen}>
                         <Image style={styles.imagen_principal}  source={{uri: image_base_url+this.props.navigation.state.params.item.imagen }} />

                         <View style={styles.contenedor_absolute}>
                            <View style={styles.icono_conte}> 
                                <Image style={styles.icono} source={{uri: image_base_url+this.props.navigation.state.params.item.vector }}/> 
                            </View>
                            
                            <View style={styles.status}>
                                <View style={styles.status_downloader}>
                                    <Text style={styles.statu_text}>Descargado</Text>
                                    <View style={{width: 20, height: 20, borderRadius: 100, backgroundColor: 'green'}}></View>
                                </View>

                                <View style={styles.update}>
                                    <Text style={styles.statu_text}>Actualizado: 20-11-2019</Text>
                                </View>
                            </View>
                         </View>


                    </View>


                    <View style={styles.contenedor_info}>
                        <Text style={styles.descripcion}>{this.props.navigation.state.params.item.titulo}</Text>
                        <Text style={styles.contenido}>{this.props.navigation.state.params.item.descripcion}</Text>
                        
                        <Button style={styles.boton_opciones}  title="DESCARGAR EN PDF"  onPress={downloadPdf}   />
                    </View>
                </View>

              

            </ScrollView>
         </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({

  contenedor_general: {
    position: 'relative',
    alignItems: 'center',
   justifyContent: 'center',
   paddingBottom: 20,
  },



  // CONTENEDOR DEL HEADER 
  contenedor_imagen :{
    flex: 1,
    height: 350,
    width: '100%',
    backgroundColor: 'blue',
  },


  imagen_principal: {
   width: '100%',
   height: 350,
   opacity: 0.8
   
  },


  contenedor_absolute:{
    position: 'absolute',
    width: '90%',
    maxWidth: 450,
    bottom: 10, left: 20,
  },


  icono_conte: {
    width: 60,
    height: 70,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderColor: 'white',
    marginBottom: 20

    
  },



  icono:{
    width: 55,
    height: 55,
    padding: 5,
    paddingBottom: 5

  },


  titulo: {
    color: 'white',
     fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 20,
      width: '90%',
      maxWidth: 420
  },


  status: {
    width: '100%',
    height: 30,
    marginTop: 10,
    flexDirection: 'row',
    flex: 2,
  },

  status_downloader:{
    paddingRight: 15,
    flexDirection: 'row',
  },

  update:{
    alignContent: 'flex-end',
  },


  statu_text:{
    color: 'white',
    paddingRight: 10,
    textTransform: 'uppercase',
    color: 'white'
  },

  status_circle:{
    width: 50,
    height: 50,
    marginLeft: 10,
    position: 'relative',
    backgroundColor: 'green',
  },


  buttonBack:{
    width: 100,
    height: 20,
    top: 20, left: 20,
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'green'

    
  },




  // CONTENEDOR DESCRIPCION

  contenedor_info:{
    width: '85%',
    maxWidth: 500,
    minHeight: 100,
    margin: 'auto',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },


  descripcion:{
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      marginBottom: 20,
      fontWeight: 'bold',
      fontSize: 20,
      color: 'green'

  },

  contenido:{
    width: '100%',
    marginTop: 10,
    marginBottom: 20
  },



  boton_opciones:{
    width: '100%',
    textAlign: 'center',
    marginBottom: 15,
  }





});




