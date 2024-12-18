//
//  Use this file to import your target's public headers that you would like to expose to Swift.
//

// TargetsWidgetBridge.m

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(TargetsWidgetModule, NSObject)

+ (bool)requiresMainQueueSetup {
  return NO;
}

RCT_EXTERN_METHOD(startLiveActivity)
RCT_EXTERN_METHOD(stopLiveActivity)

@end
