import { View, Text, TextInput, Button } from "react-native";
import styles from './styles'
import { useEffect, useState } from 'react'

function Home () {
    const [valor, setValor] = useState('')
    const [valorConvertido, setValorConvertido] = useState(0)
    const [data, setData] = useState()

    const [valorDolarAtual, setValorDolarAtual] = useState(5.24)

    function converter () {
        if(valor !== '') {
            let novoValor = parseFloat(valor)
            setValorConvertido(novoValor * valorDolarAtual)
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.areaTitulo}>
                <Text style={styles.titulo}>Conversão Monetária</Text>
            </View>
            <View style={styles.areaConversao}>
                <Text style={styles.textoPadrao}>Informe o valor em dolar</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setValor(text)}
                    value={valor}
                    placeholder="0.0"
                    keyboardType="numeric"
                />
                <Button 
                    title="Converter em real" 
                    onPress={converter}
                />
            </View>
            <View>
                <Text style={styles.textoPadrao}>Valor convertido: { valorConvertido == 0 ? '0.0' : `R$ ${valorConvertido}` }</Text>
            </View>
        </View>
    )
}

export default Home
