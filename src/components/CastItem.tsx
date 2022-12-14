import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Cast } from '../interfaces/creditsInterface'

interface Props{
    actor:Cast
}

const CastItem = ({actor}:Props) => {
    const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
    return (
        <View style={styles.container}>
            {
                actor.profile_path && <Image source={{uri}} style={{width:50,height:50,borderRadius:10}}/>
            }
            
            <View style={styles.actorInfo}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>
                    {actor.name}
                </Text>
                <Text style={{fontSize:16,opacity:0.7}}>
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}

export default CastItem

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderRadius:10,
        height:50,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        marginRight:15,
        paddingRight:15,
    },
    actorInfo:{
        marginLeft:10,
        marginTop:4
    }
})