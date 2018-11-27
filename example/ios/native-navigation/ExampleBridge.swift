//  Created by react-native-create-bridge

import Foundation
import NativeNavigation

@objc(ExampleBridge)
class ExampleBridge : NSObject {
  fileprivate let coordinator: ReactNavigationCoordinator
    
    override init() {
        coordinator = ReactNavigationCoordinator.sharedInstance
    }
    
  // Export constants to use in your native module
  @objc func constantsToExport() -> [String : Any]! {
    return ["EXAMPLE_CONSTANT": "example"]
  }

  // Implement methods that you want to export to the native module
  @objc func exampleMethod(_ screenName: String) {
    // write method here
    guard let topVc = coordinator.topViewController() else {
        return
    }
    
    let vc = TestViewController(screenName: screenName)
    topVc.navigationController?.pushViewController(vc, animated: true)
  }
}
