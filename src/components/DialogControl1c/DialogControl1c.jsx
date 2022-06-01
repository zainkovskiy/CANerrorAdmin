import React from 'react';

import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

export function DialogControl1c({ onClose }) {
  return (
    <>
      <DialogTitle>A you shure?</DialogTitle>
      <DialogActions>
        <Button>Да</Button>
        <Button
          onClick={onClose}
        >Нет</Button>
        <Button
          onClick={onClose}
        >Не знаю</Button>
      </DialogActions>
    </>
  )
}