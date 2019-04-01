import { IFlowchart } from './flowchart.interface';
import { NodeUtils } from '../node';

export class FlowchartUtils{
    
    public static newflowchart(): IFlowchart{
        const flw: IFlowchart = { 
            language: "js",
            meta: {
                selected_nodes: [0]
            },
            nodes: [  NodeUtils.getNewNode(), NodeUtils.getNewNode()  ],
            edges: []
        }

        return flw;
    }
    
}