import React from 'react'
import {ScrollView, Text, Button, StyleSheet} from 'react-native';
import Communications from 'react-native-communications'

class CGUScreenView extends React.Component {
    render() {
        return (
            <ScrollView style={styles.main_container}>
                <Text style={styles.text_content}>

                </Text>
                <Button title="J'accepte" onPress={this._navigate}/>
            </ScrollView>
        );
    }

    _navigate = () => {
        return this.props.navigation.navigate('Home');
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#ededed',
        textAlign: 'justify',
    },
});

export default CGUScreenView;