import { Project, XYPosition } from 'reactflow';

import { getNodeFit } from 'src/helpers/get-node-fit';
import { FlowSliceViewport } from 'src/store/slices/flow-slice/types';
import { MckNodeType } from 'src/type/mck-node';

export const getFlowCenterCoords = (
  project: Project,
  viewport: FlowSliceViewport,
  nodeType: MckNodeType,
): XYPosition =>
  project({
    x: viewport.width / 2 - getNodeFit(nodeType).WIDTH / 2,
    y: viewport.height / 2 - getNodeFit(nodeType).HEIGHT / 2,
  });
