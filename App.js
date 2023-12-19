//import CategoriesScreen from './src/screens/CategoriesScreen'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
//import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen';
import { useFonts } from 'expo-font'
import { useState } from 'react';
//import ProductDetailScreen from './src/screens/ProductDetailScreen';
import Navigator from './src/navigation/Navigator';

export default function App() {
  const [categorySelected, setCategorySelected] = useState('')
  const [productIdSelected, setProductIdSelected] = useState(null)

  const [fontLoaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
  })

 if(!fontLoaded) return <ActivityIndicator />

 const onSelectCategory = (category) => {
  setCategorySelected(category)
 } 

 const onSelectProductId = (productId) =>{
  setProductIdSelected(productId)
 }

  return (
   
    <Navigator/>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
