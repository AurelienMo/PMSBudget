import React from 'react';
import {View, Text} from 'react-native';
import {connect} from "react-redux";

class HomeScreenView extends React.Component{
    render() {
        return(
            <View>
                <Text>Ecran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueilEcran d'accueil</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};


export default connect(mapStateToProps)(HomeScreenView);