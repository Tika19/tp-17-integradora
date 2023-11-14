import Tabla from "./componentes/Tabla";
import './App.css';
import Bar from "./componentes/Bar";
import { useEffect } from "react";
import { useState } from "react";
import Formulario from "./componentes/Formulario";
import EliminarJugadorForm from "./componentes/FormularioEliminar";
import ModificarJugadorForm from "./componentes/FormularioActualizar";

function App() {

  const [rows, setRows] = useState([]);

  useEffect(() => {
      const fetchJugadores = async () => {
        try {
          const response = await fetch('http://localhost:3001/jugadores'); 
          const data = await response.json();
          setRows(data);
        } catch (error) {
          console.error('Error fetching jugadores:', error);
        }
      };
  
      fetchJugadores();
    }, []);

    const funcPeso = async () => {
      try {
        const response = await fetch('http://localhost:3001/jugadores/porpeso'); 
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error('Error fetching jugadores:', error);
      }
    }

    const funcNormal = async () => {
      try {
        const response = await fetch('http://localhost:3001/jugadores'); 
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error('Error fetching jugadores:', error);
      }
    }

    const funcNac = async () => {
      try {
        const response = await fetch('http://localhost:3001/jugadores/argentinos'); 
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error('Error fetching jugadores:', error);
      }
    }

    const funcAltura = async () => {
      try {
        const response = await fetch('http://localhost:3001/jugadores/masalto'); 
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error('Error fetching jugadores:', error);
      }
    }

  return (
    <div className="App">
      <Bar funcPeso={funcPeso} funcNormal={funcNormal} funcNac={funcNac}  funcAltura={funcAltura}/>
      <Tabla rows={rows}/>
      <Formulario />
      <EliminarJugadorForm />
      <ModificarJugadorForm />
    </div>
  );
}

export default App;
