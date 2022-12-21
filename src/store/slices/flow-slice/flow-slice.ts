import { createSlice } from '@reduxjs/toolkit';
import { Node, XYPosition } from 'reactflow';

import { SliceNameSpace } from 'src/store/constants';
import { FlowSliceInitialState, FlowSliceViewport } from 'src/store/slices/flow-slice/types';

const initialState: FlowSliceInitialState = {
  nodes: [],
  viewport: {
    width: 0,
    height: 0,
  },
};

export const flowSlice = createSlice({
  name: SliceNameSpace.FlowSlice,
  initialState,
  reducers: {
    addNode(state, { payload: position }: { payload: XYPosition }) {
      state.nodes = [
        ...state.nodes,
        {
          id: `${state.nodes.length + 1}`,
          type: 'facilityNode',
          position,
          data: { value: state.nodes.length + 1 },
        },
      ];
    },
    updateNodePosition(state, { payload: nodes }: { payload: Node[] }) {
      state.nodes = nodes;
    },
    updateViewport(state, { payload: viewport }: { payload: FlowSliceViewport }) {
      state.viewport = viewport;
    },
  },
});

export const { addNode, updateNodePosition, updateViewport } = flowSlice.actions;
