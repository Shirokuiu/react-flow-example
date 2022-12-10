import { Button, Drawer } from 'antd';
import { useState } from 'react';
import AddObjectsForm from 'src/components/pages/react-flow-example-page/add-objects-form/add-objects-form';

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
        <AddObjectsForm />
      </Drawer>
    </div>
  );
}

export default Header;
