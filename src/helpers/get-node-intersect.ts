import { Node, XYPosition } from 'reactflow';

import { MCK_FACILITY_FIT } from 'src/constants/mck-node';

export type NodeIntersect = {
  isIntersect: boolean;
  diffX: number;
  diffY: number;
  position: XYPosition;
};

export const getNodeIntersect = (
  { position }: Node,
  newNodeXYPosition: XYPosition,
): NodeIntersect => {
  const diffX = Math.abs(position.x - newNodeXYPosition.x);
  const diffY = Math.abs(position.y - newNodeXYPosition.y);
  const intersectX = diffX < MCK_FACILITY_FIT.WIDTH;
  const intersectY = diffY < MCK_FACILITY_FIT.HEIGHT;

  // const nodeIntersect = {
  //   isIntersect: false,
  //   diffX: 0,
  //   diffY: 0,
  //   position: newNodeXYPosition,
  // };

  // nodeIntersect.isIntersect = addedNodes.every(({ position }) => {
  //   // const diffX = Math.abs(position.x - newNodeXYPosition.x);
  //   // const diffY = Math.abs(position.y - newNodeXYPosition.y);
  //
  //   // const intersectX = diffX < MCK_FACILITY_FIT.WIDTH;
  //   // const intersectY = diffY < MCK_FACILITY_FIT.HEIGHT;
  //
  //   nodeIntersect.diffX = diffX;
  //   nodeIntersect.diffY = diffY;
  //   nodeIntersect.position = position;
  //
  //   console.log(position);
  //
  //   return diffX === diffY || (intersectX && intersectY);
  // });

  return {
    isIntersect: diffX === diffY || (intersectX && intersectY),
    diffX,
    diffY,
    position,
  };
};
