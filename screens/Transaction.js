import React from 'react';
import {View, Text, Stylesheet} from 'react-native';

export default class TransactionScreen extends React.Component{
    render(){
        <View style={styles.container}>
            <Text style={styles.text}>Transaction Screen</Text>
        </View>
    }
}


const styles = Stylesheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5653D4",
    },
    text: {
        color: "#ffff",
        fontSize: 30 ,
    },
})
