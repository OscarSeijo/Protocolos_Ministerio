import * as React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView, TouchableHighlight, Platform, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';
import PropTypes from 'prop-types';

const categorias = 'http://protocolos.revistacontactord.com/api/categorias';
const image_base_url = 'http://protocolos.revistacontactord.com/storage/';



export default class CategoriasScreen extends React.Component {

 
   state = {
      categoria: []
    }


  componentDidMount(){
      
      axios.get(categorias).then(res => {
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

                    <TouchableHighlight key={item.id} onPress={() => this.props.navigation.navigate('Search', {
                        id: item.id
                     })}>
                      <View style={styles.contenedor_item}>
                        <View style={styles.icono_contenedor}>
                          <Image style={styles.icono} source={{ uri:item.icono }}/>
                        </View>
                        <Text style={styles.categoria}>{item.titulo}</Text>
                        <View style={styles.icono_arrow}>
                          <Image style={styles.arrow} source={require('../assets/icons/arrow_right.png')}/>
                        </View>
                      </View>
                    </TouchableHighlight>



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





  contenedor_item: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row'
  },


   icono_contenedor: {
    width: 25,
    height: 25,
    paddingRight: 10,
  },

  icono:{
    width: 25,
    height: 25
  },


  categoria:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
    width: '90%'
  },

  icono_arrow: {
    width: '10%',
    height: 25, 
    padding: 5,
    marginRight: 20
  },

  arrow: {
    width: 15,
    height: 15,
    opacity: 0.6
  }



});




