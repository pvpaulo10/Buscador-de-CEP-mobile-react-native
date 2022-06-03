import React,{ useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';
import Cep from './components/Cep';
import Api from './components/Api';

export default function App() {
	const [cep, setCep] = useState(0);
	const [inputCep, setInputCep] = useState(0);
	async function carregaCep(){
		const response = await Api.get('ws/'+inputCep+'/json/');
		setCep(response.data);
	}
  return (
    <View style={styles.container}>
     	<View style={styles.bloco}>
		 <Text style={styles.textoBloco}>
			Digite o CEP :
			</Text>
			<TextInput 
				placeholder="Digite seu cep..."
				style={styles.input}
				onChangeText={(data)=>setInputCep(data)}
				/>
			<TouchableOpacity style={styles.botao} onPress={carregaCep}>
				
				<Text style={styles.textoB}>Buscar</Text>
			</TouchableOpacity>
			
			<Cep data={cep}/>
		</View>
		  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
	bloco: {
	backgroundColor: 'white',
	height:200,
	width:300,
},

	input: {
		backgroundColor:'yellow',
		borderRadius: 16,
		
		
		
	},
});
