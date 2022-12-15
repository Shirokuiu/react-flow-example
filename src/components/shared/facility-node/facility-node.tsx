import { Position } from 'reactflow';

import CustomHandle from 'src/components/shared/custom-handle/custom-handle';
import FacilityNodeSvg from 'src/components/shared/facility-node/facility-node-svg/facility-node-svg';
import './facility-node.scss';

function FacilityNode() {
  return (
    <div className="facility-node">
      <CustomHandle
        type="target"
        id="top-1"
        position={Position.Top}
        className="facility-node__handler-top-1"
      />
      <CustomHandle
        type="target"
        id="top-2"
        position={Position.Top}
        className="facility-node__handler-top-2"
      />
      <CustomHandle
        type="target"
        id="top-3"
        position={Position.Top}
        className="facility-node__handler-top-3"
      />
      <CustomHandle
        type="target"
        id="top-4"
        position={Position.Top}
        className="facility-node__handler-top-4"
      />
      <CustomHandle
        type="target"
        id="top-5"
        position={Position.Top}
        className="facility-node__handler-top-5"
      />
      <FacilityNodeSvg />
    </div>
  );
}

export default FacilityNode;
