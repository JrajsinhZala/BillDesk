import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {sharedStyles} from '../theme/Styles';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

const Container = (props: any) => {
  return (
    <KeyboardAwareScrollView
      {...props}
      scrollEnabled={props.scrollEnabled}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}
      alwaysBounceVertical={false}
      keyboardShouldPersistTaps="handled"
      style={[sharedStyles.backgroundColor]}
      contentContainerStyle={[
        sharedStyles.flexGrow,
        sharedStyles.backgroundColor,
        {paddingBottom:50}
      ]}>
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} accessible={false}>
        <>
        {props.children}
        </>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default Container;
