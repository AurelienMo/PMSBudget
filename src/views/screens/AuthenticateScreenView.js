import React from 'react';
import {View, Text} from 'react-native';
import {connect} from "react-redux";

class AuthenticateScreenView extends React.Component {
    render() {
        return(
            <View>
                <Text>Login View</Text>
            </View>
        )
    }
}

const mapStateToProps = () => {};

export default connect(mapStateToProps())(AuthenticateScreenView);