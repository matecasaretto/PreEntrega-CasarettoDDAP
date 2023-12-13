import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React from 'react'
import {colors} from '../global/colors'

const ProductItem = ({item}) => {
  return (
    <>
    <TouchableOpacity style={styles.containerProductItem}>
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
    backgroundColor: colors.tertiary,
    alignItems: 'center'
  },
  ProductTitle: {},
  productImage: {
    width: 60,
    height: 60
  }
})