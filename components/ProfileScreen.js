import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProfileScreen() {
    const userInfo = {
        name: 'Damir',
        email: 'damir@example.com',
        phone: '+7 777 777 7777',
        address: 'г. Астана, ул. Примерная, 123',
    }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileScreen</Text>
      <Text style={styles.text}>{userInfo.name}</Text>
      <Text style={styles.text}>{userInfo.email}</Text>
      <Text style={styles.text}>{userInfo.phone}</Text>
      <Text style={styles.text}>{userInfo.address}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: 320,
        height:200,
        justifyContent:'center',
        // alignItems:'center',
        marginLeft:'auto',
        marginRight:'auto',
        borderWidth:2,
        borderRadius:24,
        marginTop: 80,
        padding:20,
    },
    text:{
        fontSize:18,
        fontWeight:600,

    }

})