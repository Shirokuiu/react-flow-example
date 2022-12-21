import { Handle } from 'reactflow';

import { CustomHandleProps } from 'src/components/shared/custom-handle/types';
import './custom-handle.scss';

function CustomHandle({ type, id, position, className = '' }: CustomHandleProps) {
  return (
    <Handle
      type={type}
      id={id}
      position={position}
      className={`custom-handle ${className}`.trim()}
    />
  );
}

export default CustomHandle;
