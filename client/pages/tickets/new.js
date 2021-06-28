/*import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import AddBoxIcon from '@material-ui/icons/AddBox';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = {
  paper: {
    // marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    // margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  submit: {
    // margin: theme.spacing(3, 0, 2),
  },
};

const NewTicket = () => {

  // const classes = useStyles();
    
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/tickets',
    method: 'post',
    body: {
      title,
      price,
    },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = (event) => {
    event.preventDefault();

    doRequest();
  };

  const onBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setPrice(value.toFixed(2));
  };

  return (

    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div style={useStyles.paper}>
        <Avatar style={useStyles.avatar}>
          <AddBoxIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create a Ticket
        </Typography>
        <form style={useStyles.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus 
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="price"
            label="Price"
            id="price"
            autoComplete="price"
            onBlur={onBlur}
            onChange={(e) => setPrice(e.target.value)}
          />


          {errors}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={useStyles.submit}
          >
            Sell
          </Button>
          
        </form>
      </div>
    </Container>


  );
};

export default NewTicket;
*/

import dynamic from 'next/dynamic'
const DynamicComponent = dynamic(() => import('../../components/newticket'), { ssr: false })
export default DynamicComponent;



