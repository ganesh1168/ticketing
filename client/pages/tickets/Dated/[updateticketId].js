import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../../hooks/use-request';
import UpdateIcon from '@material-ui/icons/Update';
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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const UpdateTicket = ({ticket}) => {


  const classes = useStyles();

  const ttle=ticket.title
 // console.log(...updateticketId+"ddddd")
  const [price, setPrice] = useState('');
  const { doRequest, errors } = useRequest({
    url: `/api/tickets/${ticket.id}`,
    method: 'put',
    body: {
      title:ttle,
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
    // <div>
    //   <h1>Update Ticket</h1>
    //   <form onSubmit={onSubmit}>
    //     <div className="form-group">
    //       <label>Title</label>
    //       <input
    //         value={ttle}
           
    //         className="form-control"
    //         readOnly
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label>Price</label>
    //       <input
    //         value={price}
    //         onBlur={onBlur}
    //         onChange={(e) => setPrice(e.target.value)}
    //         className="form-control"
    //       />
    //     </div>
    //     {errors}
    //     <button className="btn btn-primary">Submit</button>
    //   </form>
    // </div>

    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <UpdateIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Update Ticket
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            value={ttle}
            readOnly
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
            className={classes.submit}
          >
            Update
          </Button>
          
        </form>
      </div>
    </Container>




  );
};
UpdateTicket.getInitialProps = async (context, client) => {
   const { updateticketId } = context.query;
  // console.log("contextssssss     "+context.query)
  //const ticketId="60d06e7318c82c0018eef4a8"
  console.log(context)
   const { data } = await client.get(`/api/tickets/${updateticketId}`);
  
   return { ticket: data,};
  };
  
export default UpdateTicket;
