//
//
// The flowchart is the basic datastructure in Mobius - it is essentially a linked-list.
// It also 
//

import { INode } from '../node';
import { IEdge } from '../edge';

export interface IFlowchart{
	language: string;

	nodes: INode[];
	edges: IEdge[];

	meta: {
		selected_nodes: number[];
	}
};