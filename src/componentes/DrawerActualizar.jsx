import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  Row,
  Space
} from "antd";

const DrawerActualizar = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const showDrawer = () => {
    setOpen(true);
  };

  const onSubmit = async () => {
    const data = await form.validateFields();
    data.edad = parseInt(data.edad);
    data.p = parseInt(data.p);
    data.est = parseFloat(data.est);
    data.ap = parseInt(data.ap);
    data.sub = parseInt(data.sub);
    data.a = parseInt(data.a);
    data.ga = parseInt(data.ga);
    data.assis = parseInt(data.assis);
    data.fc = parseInt(data.fc);
    data.fs = parseInt(data.fs);
    data.ta = parseInt(data.ta);
    data.tr = parseInt(data.tr);

    try {
      const response = await fetch("http://localhost:3001/jugadores/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      console.log("Jugador creado exitosamente: ", response);
    } catch (error) {
      console.error("Error al realizar la solicitud POST", error);
    }

    setOpen(false);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ marginBottom: 15, width: "10%", float: "left" }}>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Modificar jugador
      </Button>
      <Drawer
        title="Modificar un jugador"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80
          }
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancelar</Button>
            <Button onClick={onSubmit} type="primary">
              Modificar
            </Button>
          </Space>
        }
      >
        <Form form={form} layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name={`nombre`}
                label={`Nombre`}
                rules={[
                  {
                    required: true,
                    message: `Por favor ingresa un nombre.`
                  }
                ]}
              >
                <Input placeholder={`Ingresa un nombre.`} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name={`pos`}
                label={`Posicion`}
                rules={[
                  {
                    required: true,
                    message: `Por favor ingresa una posicion.`
                  }
                ]}
              >
                <Input placeholder={`Ingresa una posicion.`} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name={`edad`}
                label={`Edad`}
                rules={[
                  {
                    required: true,
                    message: `Por favor ingresa una edad.`
                  }
                ]}
              >
                <Input placeholder={`Ingresa una edad.`} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name={`nac`}
                label={`Nacionalidad`}
                rules={[
                  {
                    required: true,
                    message: `Por favor ingresa su nacionalidad.`
                  }
                ]}
              >
                <Input placeholder={`Ingresa una nacionalidad.`} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name={`p`}
                label={`Peso`}
                rules={[
                  {
                    required: true,
                    message: `Por favor ingresa un peso.`
                  }
                ]}
              >
                <Input placeholder={`Ingresa un peso.`} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name={`est`}
                label={`Estatura`}
                rules={[
                  {
                    required: true,
                    message: `Por favor ingresa una estatura.`
                  }
                ]}
              >
                <Input placeholder={`Ingresa una estatura.`} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name={`ap`}
                label={`Apariciones`}
                rules={[
                  {
                    required: true,
                    message: `Por favor ingresa cantidad de apariciones.`
                  }
                ]}
              >
                <Input
                  placeholder={`Por favor ingresa cantidad de apariciones.`}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name={`sub`}
                label={`Suplencias`}
                rules={[
                  {
                    required: true,
                    message: `Por favor ingresa cantidad de suplencias.`
                  }
                ]}
              >
                <Input
                  placeholder={`Por favor ingresa cantidad de suplencias.`}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name={`a`}
                label={`Atajadas?`}
                rules={[
                  {
                    required: true,
                    message: `Por favor ingresa cantidad de... atajadas?.`
                  }
                ]}
              >
                <Input placeholder={`Por favor ingresa cantidad de... algo.`} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name={`ga`}
                label={`Goles`}
                rules={[
                  {
                    required: true,
                    message: `Por favor ingresa cantidad de goles.`
                  }
                ]}
              >
                <Input placeholder={`Por favor ingresa cantidad de goles.`} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name={`assis`}
                label={`Asistencias`}
                rules={[
                  {
                    required: true,
                    message: `Por favor ingresa cantidad de asistencias.`
                  }
                ]}
              >
                <Input
                  placeholder={`Por favor ingresa cantidad de asistencias.`}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name={`fc`}
                label={`Fc`}
                rules={[
                  {
                    required: true,
                    message: `Por favor ingresa cantidad de Fc's.`
                  }
                ]}
              >
                <Input placeholder={`Por favor ingresa cantidad de Fc's.`} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name={`fs`}
                label={`Fs`}
                rules={[
                  {
                    required: true,
                    message: `Por favor ingresa cantidad de Fs.`
                  }
                ]}
              >
                <Input placeholder={`Por favor ingresa cantidad de Fs.`} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name={`ta`}
                label={`Tarjetas Amarillas`}
                rules={[
                  {
                    required: true,
                    message: `Por favor ingresa cantidad de tarjetas amarillas.`
                  }
                ]}
              >
                <Input
                  placeholder={`Por favor ingresa cantidad de tarjetas amarillas.`}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name={`tr`}
                label={`Tarjetas Rojas`}
                rules={[
                  {
                    required: true,
                    message: `Por favor ingresa cantidad de tarjetas rojas.`
                  }
                ]}
              >
                <Input
                  placeholder={`Por favor ingresa cantidad de tarjetas rojas.`}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};

export default DrawerActualizar;
