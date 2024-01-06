import React, {PureComponent} from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/colors';
import {sharedStyles} from '../theme/Styles';
import {mediumTextSize, radius} from '../theme/ScreenMatrix';
import Typography from './Typography';

type Props = {
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: TextStyle;
  label: string;
  isLoading?: boolean;
};

class CustomButton extends PureComponent<Props> {
  render() {
    const {
      onPress,
      labelStyle = {},
      buttonStyle,
      label,
      isLoading = false,
    } = this.props;
    return (
      <Pressable
        disabled={isLoading}
        style={[styles.button, buttonStyle]}
        onPress={onPress}>
        {isLoading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <View style={styles.horizontal}>
            <Typography
              color="white"
              size={mediumTextSize}
              style={labelStyle}>
              {label}
            </Typography>
          </View>
        )}
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  ...sharedStyles,
  button: {
    height: 45,
    ...sharedStyles.center,
    backgroundColor: colors.primary,
    borderRadius: radius,
  },
});

export default CustomButton;
