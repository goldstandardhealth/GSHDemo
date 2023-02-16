import { ColorValue } from 'react-native';

import { Palette } from '../components/GCallOut';

export const base = {
  black: '#000000',
  white: '#ffffff',
  stanford: '#8e2438'
};

export const blue = {
  light: '#ccdeeb',
  lighter: '#86ccff',
  regular: '#4295a5',
  darker: '#347581',
  darker2: '#2697ee',
  dark: '#192e60'
};

export const gold = {
  tabs: '#fff0c9',
  logo: '#fbb110',
  lighter: '#f19e37',
  light: '#ddb854',
  expert: '#eec77e',
  regular: '#ceaa47',
  dark: '#7c2d01'
};

export const blueCallout: Palette = {
  stroke: blue.darker,
  fill: blue.light + '7D',
  strokeWidth: 2,
  radius: 10
};

export const goldieCallout: Palette = {
  stroke: gold.dark,
  fill: blue.light + '7D',
  strokeWidth: 2,
  radius: 10
};

export const expertCallout: Palette = {
  stroke: gold.dark,
  fill: gold.expert,
  strokeWidth: 0,
  radius: 10
};

import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export type CalloutColorProps = {
  callout: StyleProp<ViewStyle>,
  calloutText: StyleProp<TextStyle>,
  [key: string]: any
}

export const introColors: CalloutColorProps = {
  callout: {
    borderWidth: 2,
    borderColor: '#7c2d01',
    backgroundColor: '#ead19a'
  },
  calloutText: {
    color: '#7c2d01'
  },
  buttonDisabled: {
    color: '#000000',
    borderColor: '#ffffff',
    backgroundColor: '#eec77e'
  },
  buttonEnabled: {
    color: '#ffffff',
    borderColor: '#ffffff',
    backgroundColor: '#5793a3'
  },
  shadow: {
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3
  }
};

export const doctorColors: CalloutColorProps = {
  callout: {
    borderWidth: 2,
    borderColor: '#eec77e',
    backgroundColor: '#5793a3'
  },
  calloutText: {
    color: '#ffffff'
  },
  calloutSubtext: {
    color: '#b3cfd6'
  },
  header: {
    color: '#54808c'
  }
}
