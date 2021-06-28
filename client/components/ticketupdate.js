import Link from 'next/link';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import buildClient from '../api/build-client';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth:650
  },
});

const TicketsPage = ({ currentUser, tickets }) => {

  const classes = useStyles();
  console.log(tickets+"fff")
  const ticketList = tickets.map((ticket) => {
    return (
      
              <TableRow key={ticket.id}>
                <TableCell component="th" scope="row">
                  {ticket.title}
                </TableCell>
                <TableCell align="right">{ticket.price}</TableCell>
                <TableCell align="right">
                    {
                      ticket.orderId==undefined?
                      <Link href="/client/pages/tickets/Dated/[updateticketId]" href="/pages/" as={`/client/pages/tickets/Dated/[updateticketId]${ticket.id}`} >
                        <a >Update</a>
                      </Link>:
                      <label style={{opacity:0.6}}>Update</label>
                    }
                </TableCell>
              </TableRow>

    );
  });

  return (
    <div align="center">
        <br></br>
       <Typography component="h1" variant="h5">
          My Tickets
        </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><h5>Title</h5></TableCell>
              <TableCell align="right"><h5>Price</h5></TableCell>
              <TableCell align="right"><h5>Link</h5></TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {ticketList}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
};

TicketsPage.getInitialProps = async (context) => {
  const client = buildClient(context);
 // const { data } = await client.get('/api/users/currentuser');

  const { data } = await client.get('/api/ticketsUser');
  console.log(data+"fff")
  return { tickets: data };
};

export default TicketsPage;
