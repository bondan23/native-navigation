import Navigator from 'native-navigation';
import React, { Component } from 'react';
import Row from '../components/Row';
import Screen from '../components/Screen';

export default class Screen2 extends Component {
  render() {
    return (
      <Screen>
        <Row
          title="Screen 2"
        />
        <Row
          title="Push to screen 3"
          onPress={() => Navigator.push('Test3')}
        />
      </Screen>
    );
  }
}
