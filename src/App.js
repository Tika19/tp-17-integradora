import Tabla from "./componentes/Tabla";
import './App.css';
import Bar from "./componentes/Bar";
import { useEffect } from "react";
import { useState } from "react";
import DrawerForm from './componentes/DrawerForm.jsx'
import DrawerEliminar from "./componentes/DrawerEliminar.jsx";
import DrawerActualizar from "./componentes/DrawerActualizar.jsx";

function App() {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    //Obtener jugadores al cargar la pagina
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

    //Obtener jugadores por peso
    const funcPeso = async () => {
      try {
        const response = await fetch('http://localhost:3001/jugadores/porpeso'); 
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error('Error fetching jugadores:', error);
      }
    }

    //Obtener jugadores todos
    const funcNormal = async () => {
      try {
        const response = await fetch('http://localhost:3001/jugadores'); 
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error('Error fetching jugadores:', error);
      }
    }

    //Obtener jugadores argentinos
    const funcNac = async () => {
      try {
        const response = await fetch('http://localhost:3001/jugadores/argentinos'); 
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error('Error fetching jugadores:', error);
      }
    }

    //Obtener jugadores en cuanto al tamañano
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
      <Bar funcPeso={funcPeso} funcNormal={funcNormal} funcNac={funcNac}  funcAltura={funcAltura} />
      <Tabla rows={rows}/>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <DrawerForm />
      <DrawerActualizar />
      <DrawerEliminar/>
      </div>
    </div>
  );
}

export default App;
