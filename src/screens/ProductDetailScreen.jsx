import { ActivityIndicator, StyleSheet, Text, View, Image } from 'react-native'
import products_data from '../data/products_data.json'
import { useEffect, useState } from 'react'
import Header from '../components/Header'

const ProductDetailScreen = ({route}) => {

  const [productSelected, setProductSelected] = useState({})
  const [isLoading, setIsloading] = useState(true)

  const productId = route.params

  useEffect(()=>{
    const productFinded = products_data.find(product=>product.id===productId)
    setProductSelected(productFinded)
    setIsloading(false)
  },
  [productId])




  return (
    <>
     {/*  <Header title="Product Detail" /> */}
      {isLoading ? (
        <ActivityIndicator size="large" style={styles.ActivityIndicator} />
      ) : (
        <View style={styles.container}>
          <View style={styles.detailsContainer}>
          <Image
            style={styles.productImage}
            resizeMode="cover" 
            source={{ uri: productSelected.images[0] }}
            />
            <Text style={styles.productTitle}>{productSelected.title}</Text>
            <Text style={styles.productDescription}>{productSelected.description}</Text>
            <Text style={styles.productPrice}>Price: ${productSelected.price}</Text>
          </View>
        </View>
      )}
    </>
  );
};

export default ProductDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    alignItems: 'center',
  },
  activityIndicator: {
    flex: 1,
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
});