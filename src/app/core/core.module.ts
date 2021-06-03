import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { LayoutComponent } from './layout/layout.component'

@NgModule({
  declarations: [LayoutComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule],
  exports: [LayoutComponent],
})
export class CoreModule {}
