import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Movie } from '../interfaces/movieInterfaces'

interface Props {
    movie:Movie
    height?:number
    width?:number
}
//solution of type in useNavigate
type RootStackParamList = {
    DetailScreen: Movie;
  };

const MoviePoster = ({movie,height=420,width=300}:Props) => {
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

    return (
        <TouchableOpacity 
            style={{width,height,marginHorizontal:2,paddingBottom:20,paddingHorizontal:8}} 
            activeOpacity={0.8}
            onPress={()=>navigation.navigate('DetailScreen',movie)}
        >
            <View style={styles.imageContainer}>
                <Image source={{uri}} style={styles.image} />
            </View>
        </TouchableOpacity>
    )
}

export default MoviePoster

const styles = StyleSheet.create({
    image:{
        flex:1,
        borderRadius:18
    },
    imageContainer:{
        flex:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
    }
})