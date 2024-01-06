import { Dimensions, Platform, PixelRatio } from "react-native";
//@ts-ignore
import _ from "lodash";

export function getOS(): string {
    return Platform.OS;
}

/**
 * SCALING - SAME VIEW FOR TABLET AND IPHONE ADDED THIS SCALE IN HEIGHT, WIDTH, MARGIN, PADDING
 */
const { width, height } = Dimensions.get("window");
const baseWidth = 360;
const baseHeight = 700;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);


export const scaledSize = (size: any) => Math.ceil(size * scale);
export const widthFromPercentage = (per: number) => (width * per) / 100;
export const heightFromPercentage = (per: number) => (height * per) / 100;


//Artboard Dimension
let artBoardHeightOrg = 640;
let artBoardWidthOrg = 360;
//Re calculated Artboard Dimension
let artBoardWidth = isSameRatio() ? artBoardWidthOrg : width;
let artBoardHeight = isSameRatio() ? artBoardHeightOrg : height;
// To check if Artboard and Device screen has same ratio
function isSameRatio(): boolean {
    return (
        artBoardWidthOrg / artBoardHeightOrg < 1 &&
        width / height < 1
    );
}
//Top or Bottom nav spaces or any extra space occupied by os e.g Status bar, Notch
let extraSpace = 0;
export function deviceBasedDynamicDimension(originalDimen: number, compareWithWidth: boolean, resizeFactor: number): number | undefined {
    if (originalDimen != null) {
        if (resizeFactor != null) {
            originalDimen *= resizeFactor;
        }
        const compareArtBoardDimenValue = compareWithWidth ? artBoardWidth : artBoardHeight;
        const artBoardScreenDimenRatio = (originalDimen * 100) / compareArtBoardDimenValue;
        let compareCurrentScreenDimenValue = compareWithWidth ? width : height - extraSpace;

        return PixelRatio.roundToNearestPixel(
            (artBoardScreenDimenRatio * compareCurrentScreenDimenValue) / 100
        );
    }
    return undefined;
}


const isSuperSmallScreen = Dimensions.get('screen').width < 350
export const scaleFactor =
    (isSuperSmallScreen ? 1 : Platform.OS === 'ios' || Platform.OS === 'android' ? 1.1 : 1) * (PixelRatio.getFontScale() || 1)

export const avatarSize = 40 * scaleFactor
export const smallAvatarSize = 18 * scaleFactor
export const contentPadding = 16 * scaleFactor

export const mutedOpacity = 0.6
export const superMutedOpacity = 0.1
export const radius = 16
export const radius10 = 10

export const altraSmallTextSize = 10 * scaleFactor
export const extraSmallTextSize = 13 * scaleFactor
export const smallTextSize = 14 * scaleFactor
export const normalTextSize = 15 * scaleFactor
export const mediumTextSize = 16 * scaleFactor
export const largeTextSize = 18 * scaleFactor
export const extraLargerTextSize = 20 * scaleFactor

export const normalize = (size: number): number => {
    const scale = width / 320;
    const newSize = size * scale;
    let calculatedSize = Math.round(PixelRatio.roundToNearestPixel(newSize))
  
    if (PixelRatio.get() < 3)
      return calculatedSize - 0.5
    return calculatedSize
  };






