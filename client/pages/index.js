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

const useSty ={
  table: {
    width: 650,
   
  },
};

const LandingPage = ({ currentUser, tickets }) => {
  
  

  const ticketList = tickets.map((ticket) => {
    return (
     
              <TableRow key={ticket.id}>
                <TableCell component="th" scope="row">
                  {ticket.title}
                </TableCell>
                <TableCell align="right">{ticket.price}</TableCell>
                <TableCell align="right">
                    <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
                      View
                    </Link>
                </TableCell>
              </TableRow>
     
    );
  });

  return (


    
    <div align="center">
        <br></br>
       <Typography component="h1" variant="h5">
          Available Tickets
        </Typography>
      <TableContainer component={Paper}>
        <Table style={useSty.table} aria-label="simple table">
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

LandingPage.getInitialProps = async (context, client, currentUser) => {

  const { data } = await client.get('/api/tickets');

  return { tickets: data ,currentUser};
};

export default LandingPage;
