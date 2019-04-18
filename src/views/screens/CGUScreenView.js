import React from 'react'
import {ScrollView, Text, Button, StyleSheet} from 'react-native';
import {connect} from "react-redux";

class CGUScreenView extends React.Component {
    render() {
        if (this.props.cguAccepted) {
            this.props.navigation.navigate('Home');
        }
        return (
            <ScrollView style={styles.main_container}>
                <Text style={styles.text_content}>
ghjgjhgghhjgghjghjghjgjhjghjgh
                </Text>
                <Button title="J'accepte" onPress={this._navigate}/>
            </ScrollView>
        );
    }

    _navigate = () => {
        const action = { type: 'ACCEPT_CGU', value: true }
        this.props.navigation.navigate('Home');
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#ededed',
        textAlign: 'justify',
    },
});

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(CGUScreenView);