import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import categories_data from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem'


const CategoriesScreen = ({navigation}) => {
  const renderCategoryItem =({item}) => (
    <CategoryItem category={item} navigation={navigation}/>
  )

  return (
    <>
    {/* <Header title='Categorias'/> */}

    <FlatList
    data={categories_data}
    renderItem={renderCategoryItem}
    keyExtractor={item=> item}/>
    </>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    
})