import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const LeftList = props => (
  <div
    className={props.classes.list}
    role="presentation"
    onClick={props.toggle('left', false)}
    onKeyDown={props.toggle('left', false)}>
    <List>
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Accueil" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Convertisseur" />
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  </div>
);

export default LeftList;
