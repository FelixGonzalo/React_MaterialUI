import React from 'react'
import {Box, Grid} from '@material-ui/core'
import Botones from './Botones'
import Iconos from './Iconos'
import Textos from './Textos'
import Estilos from './Estilos'

const Cajita = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Box border={1}>
            XS 12
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box 
            border={1}
            color='primary.contrastText'
            bgcolor='primary.main'
            p={1}
          >
            XS 12
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box border={1}>
            <Botones/>
            <Iconos/>
            <Textos/>
            <Estilos/>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cajita
