import { createSlice } from '@reduxjs/toolkit';
import { Node } from 'reactflow';

import { SliceNameSpace } from 'src/store/constants';
import { FlowSliceInitialState } from 'src/store/slices/flow-slice/types';

const initialState: FlowSliceInitialState = {
  nodes: [],
};

export const flowSlice = createSlice({
  name: SliceNameSpace.FlowSlice,
  initialState,
  reducers: {
    addNode(state) {
      state.nodes = [
        ...state.nodes,
        {
          id: `${state.nodes.length + 1}`,
          type: 'facilityNode',
          position: { x: 100, y: 200 },
          data: { value: 1 },
        },
      ];
    },
    updateNodePosition(state, { payload: nodes }: { payload: Node[] }) {
      state.nodes = nodes;
    },
  },
});

export const { addNode, updateNodePosition } = flowSlice.actions;
