import Navigator from 'native-navigation';
import React, { Component } from 'react';
import Row from '../components/Row';
import Screen from '../components/Screen';

export default class Screen4 extends Component {
  render() {
    return (
      <Screen>
        <Row
          title="Screen 4"
        />
        <Row
          title="Pop"
          onPress={() => Navigator.popToScreen('Test2')}
        />
      </Screen>
    );
  }
}
