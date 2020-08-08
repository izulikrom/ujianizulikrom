import React from 'react';
import {ImageBackground,StyleSheet, Text, View} from 'react-native';
const image = { uri: "https://images.unsplash.com/photo-1595281276435-309d79246fe2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" };
export default function Header(){
    return (
        <View style={styles.header}>
            <ImageBackground source={image} style={styles.image}>
        <Text style={styles.title}>Aplikasi Menu Makan</Text>
        </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
header: {
    height: 80,
    backgroundColor: 'red'
    },
title:{
    textAlign: 'center',
    color: 'rgb(247, 176, 70)',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop:10
},
image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});
