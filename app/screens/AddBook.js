import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Animation from 'lottie-react-native';

import beerAnim from '../assets/beer.json';

export default class AddBook extends Component {
    
    componentDidMount() {
        this.animation.play();
    }

    render() {
        return(
            <View style={this.styles.container}>
                <Animation
                   ref={animation => {
                       this.animation = animation
                   }}
                   loop={true}
                   source={beerAnim}
                />
            </View>
        );
    }

    styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(70, 50, 104)',
          },
          title: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
          }
    });
}
