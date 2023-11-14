import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nombre', headerName: 'Nombre', width: 100 },
  { field: 'pos', headerName: 'Posicion', width: 100 },
  { field: 'nac', headerName: 'Nacionalidad', width: 100 },
  { field: 'p',headerName: 'Peso',type: 'number',width: 90},
  {field: 'est',headerName: 'Estatura',type: 'number',width: 90},
  {field: 'edad', headerName: 'edad', tipe: 'number',width: 80},
];



const Tabla = ({rows}) => {

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
export default Tabla;