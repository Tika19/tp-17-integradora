import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    posicion: '',
    nac: '',
    peso: '',
    altura: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    for (const key in formData) {
      if (!formData[key]) {
        alert(`Por favor, complete todos los campos.`);
        return;
      }
    }
  
    try {
      const response = await fetch('http://localhost:3001/jugadores/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      console.log('Jugador creado exitosamente: ', response);
  
    } catch (error) {
      console.error('Error al realizar la solicitud POST', error);
    }
  };  
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="posicion">
        <Form.Label>Posición</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter posicion"
          name="posicion"
          value={formData.posicion}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="nac">
        <Form.Label>Nacionalidad</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter nac"
          name="nac"
          value={formData.nac}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="peso">
        <Form.Label>Peso</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter peso"
          name="peso"
          value={formData.peso}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="altura">
        <Form.Label>Altura</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter altura"
          name="altura"
          value={formData.altura}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Formulario;
