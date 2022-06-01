import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import './Control.scss';
import { DialogWindow } from 'components/DialogWindow';
import { DialogControl1c } from 'components/DialogControl1c';

export function Control() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [dialog, setDialog] = useState(false);

  const handlerDialog = () => {
    setDialog(!dialog);
  }

  return (
    <div className="control">
      <Button
        variant="outlined"
        size="small"
        onClick={() => handlerDialog()}
      >
        Сборка в 1с
      </Button>
      <div>
        <FormControlLabel
          control={<Checkbox
            checked={one}
            onClick={(e) => setOne(e.target.checked)}
          />}
          label="Включить новостройки"
          sx={{ ".MuiTypography-root": { fontFamily: 'Montserrat' } }}
        />
        <FormControlLabel
          control={<Checkbox
            checked={two}
            onClick={(e) => setTwo(e.target.checked)}
          />}
          label="Включить оперативное содержимое"
          sx={{ ".MuiTypography-root": { fontFamily: 'Montserrat' } }}
        />
      </div>
      {
        dialog &&
        <DialogWindow 
          open={ dialog }
          onClose={ handlerDialog }
          children={<DialogControl1c onClose={ handlerDialog }/>}
        />
      }
    </div>
  )
}