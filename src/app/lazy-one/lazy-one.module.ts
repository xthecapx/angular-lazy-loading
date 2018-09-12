import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyOneRoutingModule } from './lazy-one-routing.module';
import { ComponentListComponent } from './component-list/component-list.component';

@NgModule({
  imports: [
    CommonModule,
    LazyOneRoutingModule
  ],
  declarations: [ComponentListComponent]
})
export class LazyOneModule { }
