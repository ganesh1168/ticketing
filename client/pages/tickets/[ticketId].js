import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Button from "@material-ui/core/Button";


const useStyles = {
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  }
};


const TicketShow = ({ ticket }) => {
  const { doRequest, errors } = useRequest({
    url: '/api/orders',
    method: 'post',
    body: {
      ticketId: ticket.id,
    },
    onSuccess: (order) =>
      Router.push('/orders/[orderId]', `/orders/${order.id}`),
  });
//  const classes = useStyles();

  return (
    // <div>
    //   <h1>{ticket.title}</h1>
    //   <h4>Price: {ticket.price}</h4>
    //   {errors}
    //   <button onClick={() => doRequest()} className="btn btn-primary">
    //     Purchase
    //   </button>
    // </div>
    <div align="center">
        <Card style={useStyles.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" style={useStyles.avatar}>
                T
              </Avatar>
            }
            title={ticket.title}
          />
          <CardMedia
            style={useStyles.media}
            image="https://nextbigtechnology.com/wp-content/uploads/2018/01/event-tickets.jpg"
            title="Ticket"
          />
          <CardContent>
            <ListItem>
              <ListItemIcon>
                <AttachMoneyIcon color="secondary" />
              </ListItemIcon>
              <ListItemText>{ticket.price}</ListItemText>
              <Button variant="contained" color="primary"  onClick={() => doRequest()}> BUY</Button>
            </ListItem>

           
          </CardContent>
        </Card>

        <div style={useStyles.root}>
          {errors}
        </div>
     </div>
  );
};


TicketShow.getInitialProps = async (context, client) => {
  const { ticketId } = context.query;
  console.log(ticketId)
  console.log(context.query+"qry")
  const { data } = await client.get(`/api/tickets/${ticketId}`);

  return { ticket: data };
};

export default TicketShow;
