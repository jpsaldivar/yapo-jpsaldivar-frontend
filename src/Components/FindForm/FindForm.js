import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Button, Paper } from "@material-ui/core";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'nombre_tema', headerName: 'Tema', width: 130 },
  { field: 'nombre_album', headerName: 'Album', width: 130 },
  { field: 'preview_url', headerName: 'URL', width: 130 },
  { field: 'precio', headerName: 'Precio', width: 130 },
  { field: 'fecha_lanzamiento', headerName: 'Fecha', width: 130 },
];

export const FindForm = () => {
  
  const [rows, setRows] = useState([]);
  const [textValue, setTextValue] = useState("");

  const onTextChange = (e) => setTextValue(e.target.value);
  const handleSubmit = async () => {
    if(rows.length > 0){
      setRows([]);
    }
      console.log(textValue);
      const response = await fetch(`http://localhost:3000/search_tracks?name=${textValue}`);
      const data = await response.json();
      const songs = data.canciones.map( (song) => {
        return {
          'id' : song.cancion_id,
          'nombre_tema': song.nombre_tema,
          'nombre_album' : song.nombre_album,
          'preview_url' : song.preview_url,
          'precio' : `${song.precio.valor} (${song.precio.moneda})`,
          'fecha_lanzamiento' : song.fecha_lanzamiento,
        };
      });

      setRows(songs);

      console.log(data);
  }
  const handleReset = () => {
    setTextValue("");
    setRows([]);
  } 

  return (
    <Paper>
      <h2>Find songs of band</h2>

      <TextField
        onChange={onTextChange}
        value={textValue}
        label={"Band name"} //optional
      />

      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </Paper>
  );
};