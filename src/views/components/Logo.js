import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

class Logo extends React.Component {
    render() {
        return <Image
                    style={styles.logo}
                    source={require('../../images/logo.png')}
                />
        ;
    }
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
});

export default Logo;