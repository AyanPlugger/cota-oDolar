import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Cota from './components/Cota';
import Api from './components/Api';

export default function App() {
	const [cota, setCota] = useState(0);
	
	async function carregaCota(){
		const response = await Api.get('json/last/USD-BRL');
		setCota(response.data.USDBRL);
	}
	
  return (
    <View style={styles.container}>
      <Text>Cotação de moedas</Text>
	  <TouchableOpacity style={styles.button}
		  onPress={carregaCota}
		  >
		 
		  Dolar para Real
		
		  
	  </TouchableOpacity>	
		  
	 <Cota data={cota}/> 		  
    </View>
	
	 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	fontSize: '2rem'
  },
	
	button: {
		padding: '1rem',
		borderRadius: '10%',
		backgroundColor: 'black',
		color: "white",
	}
});
