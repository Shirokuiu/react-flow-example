import { Node } from 'reactflow';

export type FlowSliceInitialState = {
  nodes: Node[];
  viewport: FlowSliceViewport;
};

export type FlowSliceViewport = {
  width: number;
  height: number;
};
