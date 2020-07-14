import React from 'react'
import '../styles/experStyles.sass';
import { LinearProgress, withStyles, Theme, createStyles, Typography } from '@material-ui/core';

// const BorderLinearProgress = withStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       height: 10,
//       borderRadius: 5,
//     },
//     colorPrimary: {
//       backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
//     },
//     bar: {
//       borderRadius: 5,
//       backgroundColor: '#1a90ff',
//     },
//   }),
// )(LinearProgress);

function ExperPg() {
  return (
    <div id="box">
      {/* <BorderLinearProgress color='primary' variant="determinate" value={50} /> */}
    </div>
  )
}

export default ExperPg
