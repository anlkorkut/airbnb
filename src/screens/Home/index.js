import React from 'react';
import { View,
ImageBackground,
Text,
Pressable,
 } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = (props) => {
return(
    <View>
           <Pressable
                style={styles.searchButton}
                onPress={() => console.warn( 'Search Btn Clicked')}
                >
                <Fontisto name="search" size={25} color= "#f15454" />
                <Text style={styles.searchButtonText}> Where are you going? </Text>
           </Pressable>

        <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        styles={styles.image}
        >
            <Text style={styles.title}> Go Near </Text>

           <Pressable
           style={styles.button}
           onPress={() => console.warn( 'Explore Btn Clicked')}
           >
            <Text style={styles.buttonText}> Explore Nearby Stays </Text>
           </Pressable>


        </ImageBackground>
    </View>
    );
    };

export default HomeScreen;