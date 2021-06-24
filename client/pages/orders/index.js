import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LabelIcon from "@material-ui/icons/Label";
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));


const OrderIndex = ({ orders }) => {

   const classes = useStyles();

  return (
    // <ul>
    //   {orders.map((order) => {
    //     return (
    //       <li key={order.id}>
    //         {order.ticket.title} - {order.status}-{order.orderDate}
    //       </li>
    //     );
    //   })}
    // </ul>
    <div align="center">
        <br></br>
       <Typography component="h1" variant="h5">
          My Orders
        </Typography>
        <List className={classes.root}>
          {orders.map((order) => {

              
              return (
                   <ListItem component="a" href="https://pay.stripe.com/receipts/acct_1IxZpPSH7dQCxDkK/ch_1J5n76SH7dQCxDkKsFVBfwIg/rcpt_JjFcr5zBuDgYjDG1VAn97MNllYdzbkb">
                      <ListItemAvatar>
                        <Avatar>
                          <LabelIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={order.ticket.title + " - " + order.status} secondary= {order.orderDate}/>
                    
                      <ListItemText button primary="Receipt"
                      
                      />
                    </ListItem>
                    
              );
          })}

        </List>

    </div>



  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get('/api/orders');

  return { orders: data };
};

export default OrderIndex;
