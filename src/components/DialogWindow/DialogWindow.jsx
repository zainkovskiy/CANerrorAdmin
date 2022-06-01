import React from 'react';
import Dialog from '@mui/material/Dialog';

export function DialogWindow({ open, onClose, children }) {
  return (
    <Dialog onClose={onClose} open={open}>
      { children }
    </Dialog>
  )
} 