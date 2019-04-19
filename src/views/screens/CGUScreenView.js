import React from 'react'
import {ScrollView, Text, Button, StyleSheet} from 'react-native';
import {connect} from "react-redux";
import {acceptCgu} from '../../Actions/cgu';

class CGUScreenView extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.cguAccepted) {
            this.props.navigation.navigate('Home');
        }
    }

    render() {
        return (
            <ScrollView style={styles.main_container}>
                <Text style={styles.text_content}>
                    ghjgjhgghhjgghjghjghjgjhjghjg
                </Text>
                <Button title="J'accepte" onPress={this._acceptCguHandle}/>
            </ScrollView>
        );
    }

    _acceptCguHandle = () => {
        this.props.dispatch(acceptCgu());
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
    return {
        cguAccepted: state.cguReducer.cguAccepted
    }
};
export default connect(mapStateToProps)(CGUScreenView);