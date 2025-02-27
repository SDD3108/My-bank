import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SupportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.helpText}>Используйте приложение для управления своими финансами. Пополняйте или снимайте средства в разделе "Ваш счёт".</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 20 
    },
    helpText: { 
        fontSize: 18, 
        textAlign: 'center',
    },
})