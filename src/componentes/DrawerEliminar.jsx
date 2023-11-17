import React, { useState, useEffect } from 'react';
import { Button, Col, Drawer, Form, Row, Select, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const DrawerEliminar = () => {
  const [open, setOpen] = useState(false);
  const [jugadores, setJugadores] = useState([]);
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState('');
  const [form] = Form.useForm();

  useEffect(() => {
    fetch('http://localhost:3001/jugadores')
      .then((response) => response.json())
      .then((data) => setJugadores(data))
      .catch((error) => console.error('Error al obtener jugadores', error));
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onSubmit = async () => {
    if (!jugadorSeleccionado) {
      alert('Por favor, seleccione un jugador antes de eliminar.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/jugadores/${jugadorSeleccionado}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log(`Jugador con ID ${jugadorSeleccionado} eliminado exitosamente`);
        setJugadorSeleccionado('');
      } else {
        console.error('Error al eliminar el jugador');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud DELETE', error);
    }

    setOpen(false);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ marginBottom: 15, width: '10%', float: 'left' }}>
      <Button type="primary" onClick={showDrawer} icon={<DeleteOutlined />}>
        Eliminar jugador
      </Button>
      <Drawer
        title="Eliminar un jugador"
        width={720}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancelar</Button>
            <Button onClick={onSubmit} type="primary">
              Eliminar Jugador
            </Button>
          </Space>
        }
      >
        <Form form={form} layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="selectJugador"
                label="Selecciona un jugador"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, selecciona un jugador',
                  },
                ]}
              >
                <Select
                  placeholder="-- Selecciona un jugador --"
                  value={jugadorSeleccionado}
                  onChange={(value) => setJugadorSeleccionado(value)}
                >
                  {jugadores.map((jugador) => (
                    <Select.Option key={jugador.id} value={jugador.id}>
                      {jugador.nombre}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};

export default DrawerEliminar;
