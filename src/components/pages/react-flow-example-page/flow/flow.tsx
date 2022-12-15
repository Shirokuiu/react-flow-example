import { useMemo } from 'react';
import { Background, BackgroundVariant, NodeChange, ReactFlow, applyNodeChanges } from 'reactflow';
import Header from 'src/components/pages/react-flow-example-page/header/header';
import ZoomControls from 'src/components/pages/react-flow-example-page/zoom-controls/zoom-controls';

import FacilityNode from 'src/components/shared/facility-node/facility-node';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { updateNodePosition } from 'src/store/slices/flow-slice/flow-slice';
import { getNodes } from 'src/store/slices/flow-slice/selectors';
import './flow.scss';

function Flow() {
  const nodeTypes = useMemo(() => ({ facilityNode: FacilityNode }), []);
  const nodes = useAppSelector(getNodes);
  const dispatch = useAppDispatch();

  const handleNodeChanges = (changes: NodeChange[]) => {
    dispatch(updateNodePosition(applyNodeChanges(changes, nodes)));
  };

  return (
    <div className="flow">
      <Header className="flow__header" />
      <ZoomControls className="flow__zoom-controls" />
      <ReactFlow nodeTypes={nodeTypes} nodes={nodes} onNodesChange={handleNodeChanges}>
        <Background variant={BackgroundVariant.Lines} color="#99b3ec" />
      </ReactFlow>
    </div>
  );
}

export default Flow;
