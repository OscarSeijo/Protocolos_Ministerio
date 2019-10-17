import * as React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView, TouchableHighlight, Platform, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';
import { pdfService } from '../services/pdfServices';
import PropTypes from 'prop-types';

//const categoria = 'http://protocolos.revistacontactord.com/api/protocolos/all';
const categoria = 'http://protocolos.revistacontactord.com/api/categorias/';
const image_base_url = 'http://protocolos.revistacontactord.com/storage/';
const download_link = 'http://protocolos.revistacontactord.com/api/download/pdf/';



export default class SearchScreen extends React.Component {


   constructor(props) {
       super(props);
       this.onPress = this.props.onPress.bind(this);
       this.state = { 
         categoria: [] 
       }; //this is how  you set up state
   }


   // Create a function that will update the state in parent
   onPress = (id, titulo) => {
      let link = 'http://www.africau.edu/images/default/sample.pdf';
      let url = download_link+id;
      let titulo_name = '/'+titulo+'.pdf';
      pdfService.downloadPdf(url, titulo_name);

      //alert(download_link+txt);

   }




  componentDidMount(){

       axios.get(categoria+this.props.navigation.navigate.state.params.id).then(res => {
         this.setState({categoria: res.data}) 
      });
   }
  



 static navigationOptions = {
       //header: null,
       title: 'Buscar Protocolo',
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

 
                  { this.state.categoria.map((item, index) => (
                    <View key={item.id} style={styles.contenedor_opcion}>
                      <View style={styles.imagen_contenedor}>
                          <Image style={styles.imagen} source={{ uri: image_base_url+item.imagen }} />
                       </View>
                       
                       <View style={styles.contenedor_datos}>
                          <View style={styles.cont_info}>
                             <View style={styles.text_opcion} >
                               <Text>{item.titulo}</Text>
                             </View>
                          </View>

                          <View style={styles.descargas_conte}>
                             <TouchableHighlight  onPress={() => this.onPress(item.id, item.titulo)} >
                                <Image style={[styles.status_icon, styles.status_icon_active]} source={require('../assets/icons/inbox.png') } />
                             </TouchableHighlight>
                          </View>
                          
                       </View>
                    </View>
                  ))
                  } 

                

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
  },


texto_division: {
    width: '90%',
    margin: 'auto',
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'white',
    backgroundColor: 'green'
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

  },



  contenedor_datos: {
   position: 'relative',
  },


  text_opcion:{
   fontWeight: 'bold',
   textTransform: 'uppercase',
   fontSize: 24,
   paddingTop: 15,
   paddingBottom: 15,
   paddingLeft: 10,
   paddingRight: 20,
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
    padding: 12,
    position: 'absolute',
    top: 0, right: 5,
  },

  status_icon: {
   width:  25,
   height: 25,
   marginLeft: 7,
   opacity: 0.2,
  },


  status_icon_active: {
   opacity: 1,
  },



});




