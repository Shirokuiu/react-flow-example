import { useEffect, useRef } from 'react';
import { Background, BackgroundVariant, NodeChange, ReactFlow, applyNodeChanges } from 'reactflow';
import Header from 'src/components/pages/react-flow-example-page/header/header';
import ZoomControls from 'src/components/pages/react-flow-example-page/zoom-controls/zoom-controls';

import FacilityNode from 'src/components/shared/facility-node/facility-node';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { updateNodePosition, updateViewport } from 'src/store/slices/flow-slice/flow-slice';
import { getNodes } from 'src/store/slices/flow-slice/selectors';
import './flow.scss';

const nodeTypes = { facilityNode: FacilityNode };

function Flow() {
  const nodes = useAppSelector(getNodes);
  const dispatch = useAppDispatch();
  const flowWrapper = useRef<HTMLDivElement>(null);
  const proOptions = { hideAttribution: true };

  useEffect(() => {
    if (flowWrapper.current) {
      const { width, height } = flowWrapper.current.getBoundingClientRect();
      dispatch(updateViewport({ width, height }));
    }
  }, [flowWrapper]);

  const handleNodeChanges = (changes: NodeChange[]) => {
    dispatch(updateNodePosition(applyNodeChanges(changes, nodes)));
  };

  return (
    <div className="flow" ref={flowWrapper}>
      <Header className="flow__header" />
      <ZoomControls className="flow__zoom-controls" />
      <ReactFlow
        snapToGrid
        nodeTypes={nodeTypes}
        nodes={nodes}
        proOptions={proOptions}
        onNodesChange={handleNodeChanges}
      >
        <Background variant={BackgroundVariant.Lines} color="#99b3ec" />
      </ReactFlow>
    </div>
  );
}

export default Flow;
