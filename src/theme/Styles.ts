import {Dimensions, StyleSheet} from 'react-native';
import {
  deviceBasedDynamicDimension,
  extraLargerTextSize,
  extraSmallTextSize,
  largeTextSize,
  mediumTextSize,
  normalTextSize,
  smallTextSize,
} from './ScreenMatrix';
import colors from './colors';
const {width, height} = Dimensions.get('window');

export const sharedStyles = StyleSheet.create({
  absolute: {position: 'absolute'},
  absoluteFill: StyleSheet.absoluteFillObject,
  relative: {position: 'relative'},
  flex: {flex: 1},
  flexGrow: {flexGrow: 1},
  backgroundColor: {backgroundColor: colors.white},
  flexNoGrow: {flexGrow: 0},
  flexWrap: {flexWrap: 'wrap'},
  flexNoWrap: {flexWrap: 'nowrap'},
  flexShrink0: {flexShrink: 0},
  flexShrink1: {flexShrink: 1},
  horizontal: {flexDirection: 'row'},
  horizontalReverse: {flexDirection: 'row-reverse'},
  vertical: {flexDirection: 'column'},
  verticalReverse: {flexDirection: 'column-reverse'},
  alignItemsCenter: {alignItems: 'center'},
  alignItemsFlexEnd: {alignItems: 'flex-end'},
  alignItemsFlexStart: {alignItems: 'flex-start'},
  alignSelfCenter: {alignSelf: 'center'},
  alignSelfFlexEnd: {alignSelf: 'flex-end'},
  alignSelfFlexStart: {alignSelf: 'flex-start'},
  alignSelfStretch: {alignSelf: 'stretch'},
  displayFlex: {display: 'flex'},
  displayNone: {display: 'none'},
  fullHeight: {height: '100%'},
  fullMinWidth: {minWidth: '100%'},
  fullMaxWidth: {maxWidth: '100%'},
  fullWidth: {width: '100%'},
  justifyContentCenter: {justifyContent: 'center'},
  justifyContentFlexEnd: {justifyContent: 'flex-end'},
  justifyContentFlexStart: {justifyContent: 'flex-start'},
  justifyContentSpaceBetween: {justifyContent: 'space-between'},
  justifyContentSpaceEvenly: {justifyContent: 'space-evenly'},
  justifyContentSpaceAround: {justifyContent: 'space-around'},
  opacity0: {opacity: 0},
  opacity100: {opacity: 1},
  overflowHidden: {overflow: 'hidden'},
  overflowVisible: {overflow: 'visible'},
  paddingHorizontalNone: {paddingHorizontal: 0},
  paddingVerticalNone: {paddingVertical: 0},
  textCenter: {textAlign: 'center'},
  textRight: {textAlign: 'right'},
  center: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalAndVerticallyAligned: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  margin10: {
    margin: deviceBasedDynamicDimension(20, true, 1),
  },
  marginE: {
    marginEnd: deviceBasedDynamicDimension(5, true, 1),
  },
});
