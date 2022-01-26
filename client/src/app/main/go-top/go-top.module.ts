import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoTopComponent } from './go-top.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GoTopComponent],
  exports: [GoTopComponent]
})
export class GoTopModule { }
