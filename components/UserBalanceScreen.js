import { StyleSheet, Text, View,Button,Alert,TextInput } from 'react-native'
import React,{ useState,useEffect } from 'react'

export default function UserBalanceScreen() {
    const [balance,setBalance] = useState(0)
    const [input,setInput] = useState('')
    const loading = async()=>{
        const trueBalance = await AsyncStorage.getItem('balance')
        if(trueBalance){
            setBalance(Number(trueBalance))
        }
    }
    const saveBalance = async (newBalance) => {
        await AsyncStorage.setItem('balance', newBalance.toString())
    }
    useEffect(()=>{
        loading()
    },[])
    const toDeposit = () => {
        if(!isNaN(input) && input > 0){
          const newBalance = balance + Number(input)
          setBalance(newBalance)
          saveBalance(newBalance)
          setInput('')
        }
        else{
          Alert.alert('Ошибка', 'Введите корректную сумму.')
        }
    }
    const toMinus = () => {
      // Alert.prompt('test','test2',[{text:'cancel'},{text:'ok',onPress:()=>{console.log('it work')}},])
      Alert.prompt('Снять деньги','Сколько вы хотите снять?',[
        {
          text: 'Отмена',
        },
        {
          text: 'Снять',
          onPress: (value) => {
            const amount = Number(value)
            if(!isNaN(amount) && amount > 0 && balance >= amount){
              const newBalance = balance - amount
              setBalance(newBalance)
              saveBalance(newBalance)
            }
            else{
              Alert.alert('Ошибка', 'Недостаточно средств или неверная сумма.')
            }
          },
        },
      ])
      // if(!isNaN(input) && input > 0 && balance >= input){
      //   const newBalance = balance - Number(input)
      //   setBalance(newBalance)
      //   saveBalance(newBalance)
      //   setInput('')
      // }
      // else{
      //   Alert.alert('Ошибка', 'Недостаточно средств или неверная сумма.')
      // }
    }
    
  return (
    <View>
      {/* <Text style={styles.title}>UserBalanceScreen</Text> */}
      <Text style={styles.balanceText}>Баланс: {balance}₸</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Введите сумму" 
        keyboardType="numeric" 
        value={input} 
        onChangeText={setInput} 
      />
      <View style={[styles.btns,styles.btn__add]}>
        <Button color='white' title="Пополнить" onPress={toDeposit} />
      </View>
      <View style={[styles.btns,styles.btn__remove]}>
        <Button color='white' title="Снять" onPress={toMinus} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    balanceText:{
        width:250,
        height:30,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderTopLeftRadius:12,
        borderTopRightRadius: 12,
        fontSize:24,
        fontWeight:700,
        textAlign:'center',
        borderWidth: 2,
        borderBottomWidth: 0,
        marginTop: 50,
    },
    input:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderWidth:2,
        width:250,
        height:50,
        // borderRadius:12,
        borderBottomLeftRadius:12,
        borderBottomRightRadius: 12,
        borderTopWidth:0,
        // paddingHorizontal:20,
        textAlign:'center',
        fontSize:16,
        fontWeight:600,
    },
    btns:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        width:250,
        height:40,
        borderRadius:12,
        borderWidth:2,
        color:'white',
        backgroundColor:'black',
    },
    btn__add:{
        marginTop:20,
    },
    btn__remove:{
        marginTop:7,
    }
})