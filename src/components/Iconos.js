import React from 'react'
import {Button, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';

const Iconos = () => {
  return (
    <section>
      <h2>Iconos</h2>
      <DeleteIcon 
        color="primary"
      />
      <Icon>star</Icon>
      <Icon>accessibility</Icon>
      <IconButton aria-label="" >
        <Icon>adb</Icon>
      </IconButton>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        endIcon={<Icon>star</Icon>}
      >
        Delete
      </Button>
    </section>
  )
}

export default Iconos
