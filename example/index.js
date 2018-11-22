import Navigator from 'native-navigation';

Navigator.registerScreen(
  'SharedElementToScreen',
  () => require('./screens/SharedElementToScreen')
);
Navigator.registerScreen(
  'SharedElementFromScreen',
  () => require('./screens/SharedElementFromScreen')
);
Navigator.registerScreen('NavigationBar', () =>
  require('./screens/NavigationBar')
);
Navigator.registerScreen(
  'ScreenOne',
  () => require('./screens/NavigationExampleScreen'),
  {
    initialConfig: {
      // title: 'FooBar',
    },
  }
);
Navigator.registerScreen(
  'TabScreen',
  () => require('./screens/TabScreen'),
  {
    mode: 'tabs',
  }
);
Navigator.registerScreen(
  'Test1',
  () => require('./screens/Screen1').default
);
Navigator.registerScreen(
  'Test2',
  () => require('./screens/Screen2').default
);
Navigator.registerScreen(
  'Test3',
  () => require('./screens/Screen3').default
);
Navigator.registerScreen(
  'Test4',
  () => require('./screens/Screen4').default
);
