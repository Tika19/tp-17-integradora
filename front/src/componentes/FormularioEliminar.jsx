import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EliminarJugadorForm = () => {
  const [jugadores, setJugadores] = useState([]);
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/jugadores')
      .then((response) => response.json())
      .then((data) => setJugadores(data))
      .catch((error) => console.error('Error al obtener jugadores', error));
  }, []);

  const handleDelete = async () => {
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
  };

  return (
    <Form>
      <Form.Group controlId="selectJugador">
        <Form.Label>Selecciona un jugador</Form.Label>
        <Form.Control
          as="select"
          value={jugadorSeleccionado}
          onChange={(e) => setJugadorSeleccionado(e.target.value)}
        >
          <option value="">-- Selecciona un jugador --</option>
          {jugadores.map((jugador) => (
            <option key={jugador.id} value={jugador.id}>
              {jugador.nombre}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Button variant="danger" onClick={handleDelete}>
        Eliminar Jugador
      </Button>
    </Form>
  );
};

export default EliminarJugadorForm;
