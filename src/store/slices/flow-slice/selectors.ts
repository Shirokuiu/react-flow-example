import { SliceNameSpace } from 'src/store/constants';
import { State } from 'src/store/types/state';

export const getNodes = (state: State) => state[SliceNameSpace.FlowSlice].nodes;

export const getViewport = (state: State) => state[SliceNameSpace.FlowSlice].viewport;
