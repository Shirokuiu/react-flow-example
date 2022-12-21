import { MCK_FACILITY_FIT } from 'src/constants/mck-node';
import { MckNodeFit, MckNodeType } from 'src/type/mck-node';

const NodeFits: Record<string, MckNodeFit> = {
  [MckNodeType.Facility]: MCK_FACILITY_FIT,
};

export const getNodeFit = (nodeType: MckNodeType): MckNodeFit => NodeFits[nodeType];
