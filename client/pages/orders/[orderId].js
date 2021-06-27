import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Router from 'next/router';

import useRequest from '../../hooks/use-request';

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id,
    },
    onSuccess: () => Router.push('/orders'),
  });
  // const { doRequest1, errors } = useRequest({
  //   url: `/api/orders/{order.id}`',
  //   method: 'delete',
  //   
  //   onSuccess: () => Router.push('/orders'),
  // });

  useEffect(() => {
    console.log("enter into effect")
    const findTimeLeft = () => {
      console.log(order.expiresAt)
      console.log(order.orderDate)
      console.log(new Date())
      const msLeft = new Date(order.expiresAt) - new Date();
      console.log(msLeft+"swe")
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findTimeLeft();
  //  console.log(msLeft)
    console.log("left")
    const timerId = setInterval(findTimeLeft, 1000);
    console.log(timerId)
    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  if (timeLeft < 0) {

    return <div align="center">
          <br></br>
          <h4>Order Expired</h4>
          </div>;
  }

  return (
    <div align="center">
      <br></br><br></br>
      <h5>Time left to pay </h5><br></br><h4>{timeLeft} </h4>seconds
      <br></br><br></br>
      <StripeCheckout
        token={({ id }) => doRequest({ token: id })}
        stripeKey="pk_test_51IxZpPSH7dQCxDkK2xQalT7IsT1EuWhQ5v5Zqa644GTzJfXDd7UfvQcPI8qmTjIZ8wu72RpFghyEdnYGJvKvQiD300WYTRRQOI"
        amount={order.ticket.price * 100}
        email={currentUser.email}
      />
      
      {errors}
    </div>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;
