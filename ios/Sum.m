//
//  Sum.m
//  nativeBridging
//
//  Created by Mobile Developer on 08/10/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
@interface RCT_EXTERN_MODULE(Sum, NSObject)
RCT_EXTERN_METHOD(sumOfValue : (RCTResponseSenderBlock)callback)
@end
