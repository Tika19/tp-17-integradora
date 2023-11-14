import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ModificarJugadorForm = () => {
  const [jugadores, setJugadores] = useState([]);
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    posicion: '',
    nac: '',
    peso: '',
    altura: '',
  });

  useEffect(() => {
    fetch('http://localhost:3001/jugadores')
      .then((response) => response.json())
      .then((data) => setJugadores(data))
      .catch((error) => console.error('Error al obtener jugadores', error));
  }, []);

  const handleSelectChange = (e) => {
    const selectedId = e.target.value;
    setJugadorSeleccionado(selectedId);

    const selectedJugador = jugadores.find((jugador) => jugador.id === parseInt(selectedId));
    setFormData({
      nombre: selectedJugador.nombre,
      posicion: selectedJugador.posicion,
      nac: selectedJugador.nac,
      peso: selectedJugador.peso,
      altura: selectedJugador.altura,
    });
  };

  const handleUpdate = async () => {
    if (!jugadorSeleccionado) {
      alert('Por favor, selecciona un jugador antes de modificar.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/jugadores/${jugadorSeleccionado}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(`Jugador con ID ${jugadorSeleccionado} modificado exitosamente`);
      } else {
        console.error('Error al modificar el jugador');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud PUT', error);
    }
  };

  return (
    <Form>
      <Form.Group controlId="selectJugadorModificar">
        <Form.Label>Selecciona un jugador</Form.Label>
        <Form.Control
          as="select"
          value={jugadorSeleccionado}
          onChange={handleSelectChange}
        >
          <option value="">-- Selecciona un jugador --</option>
          {jugadores.map((jugador) => (
            <option key={jugador.id} value={jugador.id}>
              {jugador.nombre}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter nombre"
          name="nombre"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="posicion">
        <Form.Label>Posición</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter posicion"
          name="posicion"
          value={formData.posicion}
          onChange={(e) => setFormData({ ...formData, posicion: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="nac">
        <Form.Label>Nacionalidad</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter nac"
          name="nac"
          value={formData.nac}
          onChange={(e) => setFormData({ ...formData, nac: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="peso">
        <Form.Label>Peso</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter peso"
          name="peso"
          value={formData.peso}
          onChange={(e) => setFormData({ ...formData, peso: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="altura">
        <Form.Label>Altura</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter altura"
          name="altura"
          value={formData.altura}
          onChange={(e) => setFormData({ ...formData, altura: e.target.value })}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleUpdate}>
        Modificar Jugador
      </Button>
    </Form>
  );
};

export default ModificarJugadorForm;
