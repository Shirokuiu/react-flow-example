import { XYPosition, useReactFlow } from 'reactflow';
import { AddNodesFormProps } from 'src/components/pages/react-flow-example-page/add-nodes-form/types';

import FacilityNodeSvg from 'src/components/shared/facility-node/facility-node-svg/facility-node-svg';
import { MCK_FACILITY_FIT } from 'src/constants/mck-node';
import { getEmptySpaceCoords } from 'src/helpers/get-empty-space-coords';
import { getFlowCenterCoords } from 'src/helpers/get-flow-center-coords';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { addNode } from 'src/store/slices/flow-slice/flow-slice';
import { getNodes, getViewport } from 'src/store/slices/flow-slice/selectors';
import { MckNodeType } from 'src/type/mck-node';

function AddNodesForm({ onAddNode = () => undefined }: AddNodesFormProps) {
  const viewport = useAppSelector(getViewport);
  const nodes = useAppSelector(getNodes);
  const dispatch = useAppDispatch();
  const { project, setCenter } = useReactFlow();

  const handleAddNodeClick = (nodeType: MckNodeType) => {
    const xyPosition: XYPosition = getEmptySpaceCoords(
      nodes,
      getFlowCenterCoords(project, viewport, nodeType),
    );

    dispatch(addNode(xyPosition));
    setCenter(
      xyPosition.x + MCK_FACILITY_FIT.WIDTH / 2,
      xyPosition.y + MCK_FACILITY_FIT.HEIGHT / 2,
    );
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
            onClick={() => handleAddNodeClick(MckNodeType.Facility)}
          >
            <FacilityNodeSvg />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AddNodesForm;
