import { ReactFlowProvider } from 'reactflow';
import Flow from 'src/components/pages/react-flow-example-page/flow/flow';

import './react-flow-example-page.scss';

function ReactFlowExamplePage() {
  return (
    <div className="react-flow-example-page">
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </div>
  );
}

export default ReactFlowExamplePage;
