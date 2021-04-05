import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { WordcountPipe } from './pipes-demo/wordcount.pipe';



@NgModule({
  declarations: [
    PipesDemoComponent,
    AsyncPipeComponent,
    WordcountPipe
  ],
  exports: [
    PipesDemoComponent,
    AsyncPipeComponent,
    WordcountPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesDemoModule { }
