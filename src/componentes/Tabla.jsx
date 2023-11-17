import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nombre", headerName: "Nombre", width: 100 },
  { field: "pos", headerName: "Posicion", width: 100 },
  { field: "edad", headerName: "Edad", width: 100 },
  { field: "nac", headerName: "Nacionalidad", width: 100 },
  { field: "p", headerName: "Peso", type: "number", width: 90 },
  { field: "est", headerName: "Estatura", type: "number", width: 90 },
  { field: "ap", headerName: "Ap", type: "number", width: 90 },
  { field: "sub", headerName: "Sub", type: "number", width: 90 },
  { field: "a", headerName: "A", type: "number", width: 90 },
  { field: "ga", headerName: "Ga", type: "number", width: 90 },
  { field: "assis", headerName: "Asis", type: "number", width: 90 },
  { field: "fc", headerName: "Fc", type: "number", width: 90 },
  { field: "fs", headerName: "Fs", type: "number", width: 90 },
  { field: "ta", headerName: "Ta", type: "number", width: 90 },
  { field: "tr", headerName: "Tr", type: "number", width: 90 }
];

const Tabla = ({ rows }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 500, borderRadius:25 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        
      />
    </div>
  );
};
export default Tabla;
