import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyStatsComponent } from './my-stats.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyStatsComponent],
  exports: [MyStatsComponent]
})
export class MyStatsModule { }
