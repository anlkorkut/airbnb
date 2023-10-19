import React from 'react';
import { View, Text, Image   } from 'react-native';
import styles from './styles.js';

const Post = ( props ) => {
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image
                style={styles.image}
                source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/image'}}
             />

            {/* Image */}
            <Text style={styles.bedrooms}> 1 bed 1 bathroom </Text>
            {/* Image */}
            <Text style={styles.description} numberOfLines={2}>Entire 1 bedroom apartment in the heart of New York.Entire 1 bedroom apartment in the heart of New York. </Text>

            {/* Image */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36</Text>
                <Text style={styles.price}>  $30 </Text>
                / night
            </Text>
            {/* Image */}
            <Text style={styles.totalPrice}>$230 total </Text>
        </View>
    );
};

export default Post;