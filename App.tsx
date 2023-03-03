import React, { useState, useEffect } from 'react';
import { Linking, Platform, Text, TextInput } from 'react-native';

import RootNavigation from './src/layout/RootNavigation';

function App(): JSX.Element | null {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  TextInput.defaultProps = Text.defaultProps || {};
  TextInput.defaultProps.allowFontScaling = false;

  return <RootNavigation />;
}

export default App;
