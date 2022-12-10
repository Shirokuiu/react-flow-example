import { Background, BackgroundVariant, ReactFlow } from 'reactflow';
import Header from 'src/components/pages/react-flow-example-page/header/header';
import ZoomControls from 'src/components/pages/react-flow-example-page/zoom-controls/zoom-controls';

import './flow.scss';

function Flow() {
  return (
    <div className="flow">
      <Header className="flow__header" />
      <ZoomControls className="flow__zoom-controls" />
      <ReactFlow>
        <Background variant={BackgroundVariant.Lines} color="#99b3ec" />
      </ReactFlow>
    </div>
  );
}

export default Flow;
