import React, { useState, useEffect } from 'react';
import { Linking, Platform } from 'react-native';

import RootNavigation from './src/layout/RootNavigation';

function App(): JSX.Element | null {
  return <RootNavigation />;
}

export default App;
