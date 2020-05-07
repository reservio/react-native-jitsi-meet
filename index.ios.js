/**
 * @providesModule JitsiMeet
 */

import { NativeModules, requireNativeComponent } from 'react-native';

export const JitsiMeetView = requireNativeComponent('RNJitsiMeetView');
export const JitsiMeetModule = NativeModules.RNJitsiMeetView;
const call = JitsiMeetModule.call;
const audioCall = JitsiMeetModule.audioCall;
JitsiMeetModule.call = (url, userInfo, config) => {
  userInfo = userInfo || {};
  config = config || {};
  call(url, userInfo, config);
}
JitsiMeetModule.audioCall = (url, userInfo, config) => {
  userInfo = userInfo || {};
  config = config || {};
  audioCall(url, userInfo, config);
}
export default JitsiMeetModule;


