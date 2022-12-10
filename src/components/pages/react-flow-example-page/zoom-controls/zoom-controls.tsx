import { ExpandOutlined, ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useReactFlow } from 'reactflow';

import { PropsWithCssClassName } from 'src/type/shared';

function ZoomControls({ className = '' }: PropsWithCssClassName) {
  const { zoomIn, zoomOut, zoomTo } = useReactFlow();

  return (
    <div className={`zoom-controls ${className}`.trim()}>
      <Space direction="vertical">
        <Button
          shape="circle"
          icon={<ZoomInOutlined />}
          onClick={() => zoomIn({ duration: 800 })}
        />
        <Button shape="circle" onClick={() => zoomTo(1, { duration: 800 })}>
          1:1
        </Button>
        <Button
          shape="circle"
          icon={<ZoomOutOutlined />}
          onClick={() => zoomOut({ duration: 800 })}
        />
        <Button
          shape="circle"
          icon={<ExpandOutlined />}
          onClick={() => zoomTo(2, { duration: 800 })}
        />
      </Space>
    </div>
  );
}

export default ZoomControls;
