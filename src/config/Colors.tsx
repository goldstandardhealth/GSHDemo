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
