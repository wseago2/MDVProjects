//
//  AboutViewController.h
//  BullsEye
//
//  Created by Wesley Seago on 11/4/13.
//  Copyright (c) 2013 Wesley Seago. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface AboutViewController : UIViewController

-(IBAction)close;

@property (nonatomic, weak) IBOutlet UIWebView *webView;

@end
