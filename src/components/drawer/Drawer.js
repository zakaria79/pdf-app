import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import RightList from './RightList';
import LeftList from './LeftList';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();

  return (
    <div>
      <SwipeableDrawer
        open={props.left}
        onClose={props.toggle('left', false)}
        onOpen={props.toggle('left', true)}>
        <LeftList toggle={props.toggle} classes={classes} />
      </SwipeableDrawer>

      <SwipeableDrawer
        anchor="right"
        open={props.right}
        onClose={props.toggle('right', false)}
        onOpen={props.toggle('right', true)}>
        <RightList toggle={props.toggle} classes={classes} />
      </SwipeableDrawer>
    </div>
  );
}
