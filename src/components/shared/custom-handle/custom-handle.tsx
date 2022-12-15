import { Handle } from 'reactflow';

import { CustomHandleProps } from 'src/components/shared/custom-handle/types';

function CustomHandle({ type, id, position, className = '' }: CustomHandleProps) {
  return <Handle type={type} id={id} position={position} className={`${className}`.trim()} />;
}

export default CustomHandle;
