//
//  ViewController.h
//  Calculator
//
//  Created by Wesley Seago on 1/8/14.
//  Copyright (c) 2014 Wesley Seago. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController
{
    int total;
    int mode;
    
    NSString *valueString;
    
    BOOL lastButtonWasMode;
    
    IBOutlet UILabel *label;
}

-(IBAction)tappedClear:(id)sender;
-(IBAction)tappedNumber:(UIButton*)btn;
-(IBAction)tappedPlus:(id)sender;
-(IBAction)tappedMinus:(id)sender;
-(IBAction)tappedMultiply:(id)sender;
-(IBAction)tappedDivide:(id)sender;
-(IBAction)tappedEquals:(id)sender;

@end
