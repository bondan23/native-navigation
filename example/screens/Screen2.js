import Navigator from 'native-navigation';
import React, { Component } from 'react';
import Row from '../components/Row';
import Screen from '../components/Screen';
import { NativeModules } from 'react-native';

const { ExampleBridge } = NativeModules;

export default class Screen2 extends Component {
  handlePushNative() {
    ExampleBridge.exampleMethod('Test3');
  }

  render() {
    return (
      <Screen>
        <Row
          title="Screen 2"
        />
        <Row
          title="Push to native screen"
          onPress={this.handlePushNative}
        />
        <Row
          title="Push to screen 3"
          onPress={() => Navigator.push('Test3')}
        />
      </Screen>
    );
  }
}
