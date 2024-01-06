import React, {useRef, useState} from 'react';
import {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import colors from '../theme/colors';
import {sharedStyles} from '../theme/Styles';
import {
  extraSmallTextSize,
  normalTextSize,
  smallTextSize,
} from '../theme/ScreenMatrix';
import Typography from './Typography';

interface S {
  customStyle?: StyleProp<TextStyle>;
  customContainerStyle?: StyleProp<ViewStyle>;
  props?: TextInputProps;
  value: string;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: any;
  returnKeyType?: ReturnKeyTypeOptions;
  onChangeText: (value: string) => void;
  maxLength?: number;
  errorMassage?: string;
  placeholder?: string;
  label?: string;
  multiline?: boolean;
  customRef?: any;
  onSubmitEditing?: any;
  editable?: boolean;
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto' | undefined;
}

const BorderTextInput: React.FC<S> = ({
  customStyle,
  props,
  onChangeText,
  keyboardType,
  returnKeyType,
  value,
  maxLength = undefined,
  customContainerStyle,
  errorMassage,
  placeholder,
  label,
  customRef,
  onSubmitEditing,
  multiline = false,
  autoCapitalize = 'none',
  editable = true,
  pointerEvents,
}: S) => {
  const ref = useRef<any>(null);
  const [hasFocus, setHasFocus] = useState<boolean>(false);

  const onFocus = () => {
    ref.current.setNativeProps({
      style: {backgroundColor: colors.color6, borderColor: colors.primary},
    });
    setHasFocus(true);
  };
  const onBlur = () => {
    ref.current.setNativeProps({
      style: {backgroundColor: colors.color1, borderColor: colors.borderColor},
    });
    setHasFocus(false);
  };

  return (
    <View style={customContainerStyle}>
      <Typography size={smallTextSize} color="grey" style={styles.lableStyle}>
        {label}
      </Typography>
      <View
        ref={ref}
        style={[
          styles.blurInput,
          styles.horizontal,
          customStyle,
          errorMassage
            ? {borderColor: colors.error}
            : hasFocus
            ? {borderColor: colors.primary}
            : {},
        ]}>
        <TextInput
          ref={customRef}
          style={[styles.inputBox, customStyle]}
          placeholder={placeholder}
          keyboardType={keyboardType || 'default'}
          placeholderTextColor={colors.grey}
          onChangeText={onChangeText}
          onBlur={onBlur}
          onFocus={onFocus}
          multiline={multiline}
          selectionColor={colors.regentGrey}
          underlineColorAndroid="transparent"
          value={value}
          editable={editable}
          maxLength={maxLength}
          autoCorrect={false}
          autoCapitalize={autoCapitalize || 'none'}
          autoComplete="off"
          returnKeyType={returnKeyType || 'done'}
          textContentType="none"
          blurOnSubmit={false}
          onSubmitEditing={onSubmitEditing}
          pointerEvents={pointerEvents}
          {...props}
        />
      </View>
      {errorMassage && (
        <Typography
          adjustsFontSizeToFit={true}
          size={extraSmallTextSize}
          color="error"
          style={styles.errorStyle}>
          {errorMassage}
        </Typography>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ...sharedStyles,
  inputBox: {
    backgroundColor: colors.transparent,
    paddingStart: 15,
    paddingEnd: 15,
    fontSize: normalTextSize,
    color: colors.darkGrey2,
    flex: 1,
  },
  blurInput: {
    backgroundColor: colors.color1,
    borderRadius: 10,
    borderColor: colors.borderColor,
    borderWidth: 1,
    height: 45,
    ...sharedStyles.alignItemsCenter,
  },
  lableStyle: {
    marginTop: 7,
    marginBottom: 7,
  },
  codeStyle: {
    paddingStart: 10,
    paddingEnd: 10,
  },
  errorStyle: {
    marginTop: 5,
    paddingStart: 5,
  },
});
export default BorderTextInput;
