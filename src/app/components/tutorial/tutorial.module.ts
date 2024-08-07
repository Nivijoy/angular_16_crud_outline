import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Components, TutorialRoutingModule } from './tutorial-routing.module';
import { ShareModule } from '../../sharedModule/shared.module';

@NgModule({
  declarations: [...Components],
  imports: [CommonModule, ShareModule, TutorialRoutingModule],
})
export class TutorialModule {}
