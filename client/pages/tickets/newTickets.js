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

const useStyles = {
  table: {
    minWidth: 650,
    maxWidth:650
  },
};

const TicketsPage = ({ currentUser, tickets }) => {

  // const classes = useStyles();
  const ticketList = tickets.map((ticket) => {
    return (
      // <tr key={ticket.id}>
      //   <td>{ticket.title}</td>
      //   <td>{ticket.price}</td>
      //   <td>
      //       {ticket.orderId==undefined?
      //     <Link href="/tickets/Dated/[updateticketId]" as={`/tickets/Dated/${ticket.id}`} >
      //       <a >update</a>
      //     </Link>:
      //       <label style={{opacity:0.6}}>update</label>
      //       }
    
      //   </td>
      // </tr>

              <TableRow key={ticket.id}>
                <TableCell component="th" scope="row">
                  {ticket.title}
                </TableCell>
                <TableCell align="right">{ticket.price}</TableCell>
                <TableCell align="right">
                    {
                      ticket.orderId==undefined?
                      <Link href="/tickets/Dated/[updateticketId]" as={`/tickets/Dated/${ticket.id}`} >
                        <a >Update</a>
                      </Link>:
                      <label style={{opacity:0.6}}>Reserved</label>
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
        <Table style={useStyles.table} aria-label="simple table">
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

TicketsPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get('/api/ticketsUser');

  return { tickets: data };
};

export default TicketsPage;
