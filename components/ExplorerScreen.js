import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {useEffect, useState} from "react";
import FetchDatabase from "../src/index.js";
//importerer firebase database
import { getDatabase, ref, onValue } from "firebase/database";


function ExplorerScreen(){
    return (
        <View style={styles.container}>
            <FetchDatabase />
        </View>
    );
}

export default ExplorerScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderRadius:10,
        margin: 5,
        padding: 5,
        height: 50,
        justifyContent:'center'
    },
    label: { fontWeight: 'bold' },
});
