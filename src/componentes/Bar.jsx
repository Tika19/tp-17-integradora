import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

const Bar = ({funcPeso, funcNac, funcAltura, funcNormal}) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div style={{marginBottom: 15, width:'100%'}}>
      <Button type="text" onClick={showDrawer} style={{
          float:'left'
      }}>
        Filtrar
      </Button>
      <Drawer title="Filtrar Por" placement="right" onClose={onClose} open={open}>
        <p onClick={funcPeso} style={{cursor: 'pointer'}}>Peso</p>
        <p onClick={funcAltura} style={{cursor: 'pointer'}}>Altura</p>
        <p onClick={funcNac} style={{cursor: 'pointer'}}>Nacionalidad: Argentino</p>
      </Drawer>
    </div>
  );
};
export default Bar;

