import { AddNodesFormProps } from 'src/components/pages/react-flow-example-page/add-nodes-form/types';

import FacilityNodeSvg from 'src/components/shared/facility-node/facility-node-svg/facility-node-svg';
import { useAppDispatch } from 'src/hooks';
import { addNode } from 'src/store/slices/flow-slice/flow-slice';

function AddNodesForm({ onAddNode = () => undefined }: AddNodesFormProps) {
  const dispatch = useAppDispatch();

  const handleAddNodeClick = (nodeType: string) => {
    dispatch(addNode());
    onAddNode(nodeType);
  };

  return (
    <div className="add-objects-form">
      <h2>Тип объекта</h2>
      <ul>
        <li>
          <button
            type="button"
            className="reset-button"
            onClick={() => handleAddNodeClick('facility')}
          >
            <FacilityNodeSvg />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AddNodesForm;
