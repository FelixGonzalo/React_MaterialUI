
import React from 'react'
import {Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  botonPersonalizado: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
})


const Estilos = () => {

  const classes = useStyle()

  return (
    <section>
      <h2>Estilos</h2>
      <Button className={classes.botonPersonalizado}>
        Mi bóton personalizado1
      </Button>
    </section>
  )
}

export default Estilos
