import React, { useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const FloatingBtn = ({openModal}) => {

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        onClick={openModal}
        style={{ position: 'fixed', bottom: '16px', right: '16px' }}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default FloatingBtn;
