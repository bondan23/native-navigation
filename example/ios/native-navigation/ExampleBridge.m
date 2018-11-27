//  Created by react-native-create-bridge

// import RCTBridgeModule
#import <React/RCTBridgeModule.h>

// Export a native module
// https://facebook.github.io/react-native/docs/native-modules-ios.html#exporting-swift
@interface RCT_EXTERN_MODULE(ExampleBridge, NSObject)

- (dispatch_queue_t)methodQueue {
    return dispatch_get_main_queue();
}

// Export methods to a native module
// https://facebook.github.io/react-native/docs/native-modules-ios.html#exporting-swift
RCT_EXTERN_METHOD(exampleMethod:(NSString *)screenName)

@end
