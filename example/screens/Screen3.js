import Navigator from 'native-navigation';
import React, { Component } from 'react';
import Row from '../components/Row';
import Screen from '../components/Screen';

export default class Screen3 extends Component {
  render() {
    return (
      <Screen>
        <Row
          title="Screen 3"
        />
        <Row
          title="Push to screen 4"
          onPress={() => Navigator.push('Test4')}
        />
      </Screen>
    );
  }
}
