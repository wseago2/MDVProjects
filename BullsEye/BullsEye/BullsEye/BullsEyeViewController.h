//
//  BullsEyeViewController.h
//  BullsEye
//
//  Created by Wesley Seago on 11/4/13.
//  Copyright (c) 2013 Wesley Seago. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface BullsEyeViewController : UIViewController <UIAlertViewDelegate>

-(IBAction)showAlert;
-(IBAction)sliderMoved:(UISlider *)slider;
-(IBAction)startOver;

@property (nonatomic, weak) IBOutlet UISlider *slider;
@property (nonatomic, weak) IBOutlet UILabel *targetLabel;
@property (nonatomic, weak) IBOutlet UILabel *scoreLabel;
@property (nonatomic, weak) IBOutlet UILabel *roundLabel;

@end
