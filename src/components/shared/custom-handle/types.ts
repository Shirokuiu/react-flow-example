import { HandleType, Position } from 'reactflow';

import { PropsWithCssClassName } from 'src/type/shared';

export type CustomHandleProps = PropsWithCssClassName<CustomHandle>;

export type CustomHandle = {
  id?: string;
  type: HandleType;
  position: Position;
};
