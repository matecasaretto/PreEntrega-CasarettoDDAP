import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import Card from './Card'
import {colors} from '../global/colors'

const CategoryItem = ({category, navigation}) => {
  return (
  <TouchableOpacity onPress={()=>navigation.navigate("Producto",{category})}>
    <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
    </Card> 
  </TouchableOpacity>
    
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.primary,
        padding: 20,
        margin: 10
    },
    text: {
      textTransform: 'capitalize',
      fontSize: 15,
      fontFamily: 'Lato-Regular'
    }
})