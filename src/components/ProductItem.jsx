import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React from 'react'
import {colors} from '../global/colors'

const ProductItem = ({item, navigation}) => {
  return (
    <>
    <TouchableOpacity onPress={()=>navigation.navigate("Detalle del producto",item.id)} style={styles.containerProductItem}>
        <Text style={styles.ProductTitle}>{item.title}</Text>
        <Image
        style={styles.productImage}
        resizeMode='cover'
        source={{uri: item.thumbnail}}/>
    </TouchableOpacity>
  </>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  containerProductItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
    backgroundColor: colors.primary,
    alignItems: 'center'
  },
  ProductTitle: {},
  productImage: {
    width: 60,
    height: 60
  }
})