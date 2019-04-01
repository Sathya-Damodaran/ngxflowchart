import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlowchartComponent } from './flowchart.component';
import { NodeComponent } from './node/node.component';
import { PortComponent } from './port/port.component';
import { DraggableDirective } from './directives/draggable.directive';
import { EdgeComponent } from './edge/edge.component';


@NgModule({
  declarations: [
    FlowchartComponent, 
    NodeComponent, 
    PortComponent, 
    EdgeComponent,
    DraggableDirective
  ],
  exports: [ FlowchartComponent ],
  imports: [ CommonModule,
             FormsModule
           ],
  entryComponents: [ ],
  providers: [ ]
})
export class NgxFlowchartModule {
    constructor () { }
}
