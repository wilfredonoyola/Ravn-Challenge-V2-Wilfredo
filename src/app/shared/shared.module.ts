import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    // vendor
    CommonModule,
    RouterModule,
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,

    // local
    LoadingComponent,
  ],
})
export class SharedModule {}
