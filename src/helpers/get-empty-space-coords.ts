import { Node, XYPosition } from 'reactflow';

import { MCK_FACILITY_FIT } from 'src/constants/mck-node';
import { NodeIntersect, getNodeIntersect } from 'src/helpers/get-node-intersect';

export const getEmptySpaceCoords = (
  addedNodes: Node[],
  newNodeXYPosition: XYPosition,
): XYPosition => {
  const nodes = addedNodes.filter((node) => getNodeIntersect(node, newNodeXYPosition).isIntersect);

  if (!nodes.length) {
    return newNodeXYPosition;
  }

  const lastIntersectedNode: NodeIntersect = getNodeIntersect(
    nodes[nodes.length - 1],
    nodes[nodes.length - 1].position,
  );

  return {
    x: lastIntersectedNode.diffX + MCK_FACILITY_FIT.WIDTH + nodes[nodes.length - 1].position.x,
    y: lastIntersectedNode.diffY + MCK_FACILITY_FIT.HEIGHT + nodes[nodes.length - 1].position.y,
  };
};
