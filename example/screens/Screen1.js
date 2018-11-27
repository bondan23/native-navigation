import Navigator from 'native-navigation';
import React, { Component } from 'react';

import Row from '../components/Row';
import Screen from '../components/Screen';

export default class Screen1 extends Component {
  render() {
    return (
      <Screen>
        <Row
          title="Screen 1"
        />
        <Row
          title="Push to screen 2"
          onPress={() => Navigator.push('Test2')}
        />
      </Screen>
    );
  }
}
