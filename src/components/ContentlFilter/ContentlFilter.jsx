import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { TextField } from "@mui/material";

export function ContentlFilter({ filter, name }) {
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('all');

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {
        name === 'active' && 
        <FormControl size="small">
        <InputLabel id="demo-simple-select-label">Тип договора</InputLabel>
        <Select
          label="Тип договора"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size='small'
          sx={{ width: '223px' }}
          value={select}
          onChange={(e) => { setSelect(e.target.value), filter(search, e.target.value, name) }}
          name={name}
        >
          <MenuItem value='all'>Все</MenuItem>
          <MenuItem value="exclusive">Эксклюзив</MenuItem>
          <MenuItem value='mls'>МЛС</MenuItem>
          <MenuItem value='advertising'>РД</MenuItem>
          <MenuItem value='trend'>Новостройки</MenuItem>
        </Select>
      </FormControl>
      }
      <TextField
        autoComplete="off"
        size="small"
        label="Поиск"
        value={search}
        onChange={(e) => { setSearch(e.target.value), filter(e.target.value, select, name) }}
        name={name}
      />
    </div>
  )
}