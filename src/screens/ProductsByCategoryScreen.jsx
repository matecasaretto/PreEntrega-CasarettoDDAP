import { FlatList, StyleSheet, Text, View } from 'react-native'
import products_data from '../data/products_data.json'
import ProductItem from '../components/ProductItem'
import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import { useEffect, useState } from 'react'

const ProductsByCategoryScreen = ({category}) => {

  const [ProductsByCategory, setProductsByCategory] = useState([])

  useEffect(()=>{
    const productsFilterByCategory = products_data.filter(product=>product.category===category)
    setProductsByCategory(productsFilterByCategory)
  },[category])

  const renderProductItem = ({item}) =>(
    <ProductItem
    item={item}/>
  )


  return (
    <>
    <Header
    title={'Products'}/>
    <Card>
      <FlatList
    data={ProductsByCategory}
    renderItem={renderProductItem}
    keyExtractor={item=> item.id}/>
    </Card>
    
    </>

  )
}

export default ProductsByCategoryScreen

const styles = StyleSheet.create({
  containerRenderItem: {
    flex: 1,
  }
})