import { Button, Drawer } from 'antd';
import { useState } from 'react';
import AddNodesForm from 'src/components/pages/react-flow-example-page/add-nodes-form/add-nodes-form';

import { PropsWithCssClassName } from 'src/type/shared';

function Header({ className = '' }: PropsWithCssClassName) {
  const [isOpen, toggleIsOpen] = useState<boolean>(false);

  return (
    <div className={`header ${className}`.trim()}>
      <Button type="primary" onClick={() => toggleIsOpen(true)}>
        Добавить объект
      </Button>
      <Drawer
        title="Добавить объект"
        placement="left"
        onClose={() => toggleIsOpen(false)}
        open={isOpen}
      >
        <AddNodesForm onAddNode={() => toggleIsOpen(false)} />
      </Drawer>
    </div>
  );
}

export default Header;
