import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTagsComponent } from './my-tags.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyTagsComponent],
  exports: [MyTagsComponent]
})
export class MyTagsModule { }
