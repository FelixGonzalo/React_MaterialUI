import React from 'react'
import {Button} from '@material-ui/core'

const Botones = () => {
  return (
    <section>
      <h2>BOTONES</h2>
      <Button color="primary">
        boton
      </Button>
      <Button size="large" variant="contained" color="secondary">
        boton
      </Button>
      <Button disableElevation size="medium" variant="contained" color="secondary">
        boton
      </Button>
      <Button size="small" variant="outlined" color="secondary">
        boton
      </Button>
      <Button size="large" variant="outlined" color="secondary" href="#">
        Google
      </Button>
      <Button fullWidth  variant="contained" color="secondary" href="#">
        Google
      </Button>
    </section>
  )
}

export default Botones
