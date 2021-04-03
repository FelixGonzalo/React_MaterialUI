import React from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core'
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

const Listas = () => {
  return (
    <div>
      <List component="ul">
        <ListItem button>
          <ListItemIcon>
            <AddIcCallIcon/>
          </ListItemIcon>
          <ListItemText primary='Contáctame' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AirportShuttleIcon/>
          </ListItemIcon>
          <ListItemText primary='Blog' />
        </ListItem>
        <Divider/>
      </List>
    </div>
  )
}

export default Listas
