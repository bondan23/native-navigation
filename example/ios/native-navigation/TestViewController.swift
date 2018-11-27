//
//  TestViewController.swift
//  native-navigation
//
//  Created by Bondan Eko Prasetyo on 22/11/18.
//  Copyright © 2018 CocoaPods. All rights reserved.
//

import UIKit
import NativeNavigation

class TestViewController: UIViewController {
    private let moduleName: String
    
    init(screenName: String) {
        self.moduleName = screenName
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        view.backgroundColor = .white
        
        let pushButton1 = UIButton(type: .roundedRect)
        pushButton1.setTitle("Push to Screen \(self.moduleName)", for: .normal)
        pushButton1.addTarget(self, action: #selector(pushScreenOne(sender:)), for: .touchUpInside)
        pushButton1.frame = CGRect(x: 0, y: 100, width: 320, height: 60)
        view.addSubview(pushButton1)
    }
    
    @objc func pushScreenOne(sender: UIButton) {
        let screenOne = ReactViewController(moduleName: self.moduleName)
        navigationController?.pushReactViewController(screenOne, animated: true)
    }
}
