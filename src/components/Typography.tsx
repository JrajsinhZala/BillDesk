import React, { PureComponent } from 'react';
import { Text, StyleProp, TextStyle, StyleSheet } from 'react-native';
import colors, { ColorType } from '../theme/colors';

import { mediumTextSize } from '../theme/ScreenMatrix';


type DefaultProps = Readonly<typeof defaultProps>;

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: ColorType;
  size?: number;
  adjustsFontSizeToFit?: boolean;
} & Partial<DefaultProps>;

const defaultProps = {
  style: {},
  lines: 0,
  pd: 0,
  adjustsFontSizeToFit: false,
};

class Typography extends PureComponent<Props & DefaultProps> {
  render() {
    const {
      lines,
      style,
      children,
      color, 
      size,
      adjustsFontSizeToFit,
    } = this.props;

    return (
      <Text
        {...this.props}
        numberOfLines={lines ? lines : undefined}
        adjustsFontSizeToFit={adjustsFontSizeToFit}
        style={[getStyles(color, size).textStyle,style]}>
        {children}
      </Text>
    );
  }

  static defaultProps = defaultProps;
}
const getStyles = (color?: ColorType, size?: number) =>
  StyleSheet.create({
    textStyle: {
      color: colors[color || 'black'],
      fontSize: size || mediumTextSize,
      backgroundColor:colors.transparent
    },
  });


export default Typography;
