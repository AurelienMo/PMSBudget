import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from "react-redux";

class HomeScreenView extends React.Component{
    render() {
        return(
            <View style={styles.main_container}>
                <View style={styles.login_container}>
                    <Text style={styles.title_text}>
                        Bonjour,
                    </Text>
                    <Text style={styles.content_text}>
                        Afin de profiter de l'intégralité des services pour la gestion de votre budget, nous vous invitons à vous connecter avec vos identifiants ou le QR code de votre compte si vous l'avez généré.
                    </Text>

                    <Button title={"Connexion"} onPress={() => {this._navigate('Authenticate')}} />
                </View>
                <View style={styles.contact_container}>
                </View>
            </View>
        )
    }

    _navigate(route) {
        this.props.navigation.navigate(route);
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: '#fff'
    },
    login_container: {
        flex: 2,
        padding: 5,
        backgroundColor: '#efefef',
        justifyContent: 'space-evenly',
        marginBottom: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
    },
    contact_container: {
        flex: 1,
        padding: 5,
        backgroundColor: '#efefef',
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
    },
    title_text: {
        fontSize: 36,
        padding: 20
    },
    content_text: {
        fontSize: 18,
        padding: 20,
        lineHeight: 25
    },
})

const mapStateToProps = () => {};

export default connect()(HomeScreenView);