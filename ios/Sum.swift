//
//  Sum.swift
//  nativeBridging
//
//  Created by Mobile Developer on 07/10/19.
//  Copyright © 2019 Facebook. All rights reserved.

import Foundation
import UIKit
@objc(Sum)
class Sum: NSObject {

@objc
func sumOfValue(_ callback: RCTResponseSenderBlock){
    var sum = 0

    for i in 0..<1000{
        
        for j in 0..<1000{
            
            for k in 0..<1000{
                
                sum = sum + i + j + k
                
            }
            
        }
        
    }
    print("Sum", sum)
    callback([NSNull(), sum])
}

@objc
static func requiresMainQueueSetup() -> Bool {
    return true
}
}
