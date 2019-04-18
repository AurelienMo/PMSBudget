import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Logo from "./Logo";

class Header extends React.Component{
    render() {
        const {title} = this.props;
        return(
            <View style={styles.main_container}>
                <View style={styles.logo_container}>
                    <Logo />
                </View>
                <View style={styles.text_container}>
                    <Text style={styles.title_text}>{title}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title_text: {
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Header;