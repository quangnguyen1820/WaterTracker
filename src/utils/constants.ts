import { Dimensions } from "react-native";
import DeviceInfo from "react-native-device-info";

export const { width, height } = Dimensions.get('screen')

export const paddingHasNotch = DeviceInfo.hasNotch() ? 32 : 16;