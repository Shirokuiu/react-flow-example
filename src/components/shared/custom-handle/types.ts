import { HandleType, Position } from 'reactflow';

import { PropsWithCssClassName } from 'src/type/shared';

export type CustomHandleProps = PropsWithCssClassName<{
  id?: string;
  type: HandleType;
  position: Position;
}>;
