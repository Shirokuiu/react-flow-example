import CustomHandle from 'src/components/shared/custom-handle/custom-handle';
import { handles } from 'src/components/shared/facility-node/constants';
import FacilityNodeSvg from 'src/components/shared/facility-node/facility-node-svg/facility-node-svg';
import './facility-node.scss';

import { MCK_FACILITY_FIT } from 'src/constants/mck-node';

function FacilityNode() {
  return (
    <div
      className="facility-node"
      style={{ width: MCK_FACILITY_FIT.WIDTH, height: MCK_FACILITY_FIT.HEIGHT }}
    >
      {handles.map(({ type, id, position, className }) => (
        <CustomHandle key={id} type={type} id={id} position={position} className={className} />
      ))}
      <FacilityNodeSvg />
    </div>
  );
}

export default FacilityNode;
