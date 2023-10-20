import React, {useState} from 'react';
import { View, TextInput, Text, FlatList } from 'react-native';
import styles from './styles.js';
import Entypo from 'react-native-vector-icons/Entypo';

import searchResults from '../../../assets/data/search';

const DestinationSearchScreen = (props) => {

    const [inputText, setInputText] = useState ('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Where are you goin?"
                value={inputText}
                onChangeText={(text) => setInputText(text)} // Used a callback function for clarity

            />

            <FlatList
                data={searchResults}
                renderItem={({item}) => (
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Entypo name={"location-pin"} size={30} />

                    </View>
                    <Text> {item.description} </Text>
                </View>
                )}
            />

        </View>
    );
};

export default DestinationSearchScreen;