import React, { ReactNode, useCallback } from 'react';
import { TouchableOpacity, Linking, Alert, StyleProp, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';

type Props = {
  target: string;
  style?: StyleProp<ViewStyle>
  children: ReactNode;
};

function GLink({ children, target, style }: Props) {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(target);
    if (!supported) {
      await Linking.openURL(target);
    } else {
      Alert.alert(`Don't know how to open: ${target}`);
    }
  }, [target]);

  return (
    <TouchableOpacity style={style} onPress={handlePress}>
      { children }
    </TouchableOpacity>
  );
}

export default GLink;
