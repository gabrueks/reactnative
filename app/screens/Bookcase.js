import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Bookcase extends Component {
    render() {
        return(
            <View style={this.styles.container}>
                <Text style={this.styles.title}>
                    Bookcase
                </Text>
            </View>
        );
    }

    styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
          },
          title: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
          }
    });
}
