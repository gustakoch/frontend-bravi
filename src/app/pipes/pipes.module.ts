import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeTransformPipe } from './type-transform.pipe';

@NgModule({
  declarations: [TypeTransformPipe],
  imports: [CommonModule],
  exports: [TypeTransformPipe]
})
export class PipesModule { }
