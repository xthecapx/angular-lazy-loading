import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyTwoRoutingModule } from './lazy-two-routing.module';
import { ComponentTwoComponent } from './component-two/component-two.component';

@NgModule({
  imports: [
    CommonModule,
    LazyTwoRoutingModule
  ],
  declarations: [ComponentTwoComponent]
})
export class LazyTwoModule { }
